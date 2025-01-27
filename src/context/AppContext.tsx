/* eslint-disable react/react-in-jsx-scope */
import {createContext, useEffect, useState} from 'react';
import {menuList} from '../static';

export interface IData {
  id: number;
  title: string;
  subTitle: string;
  description: string;
  price: string;
  img: any;
  totalChart: number;
}

interface IAppProvider {
  data: IData[];
  totalChart: number;
  updateTotalChart: (id: number, operationType: 'Add' | 'Min') => void;
}

const AppContext = createContext<IAppProvider>({} as IAppProvider);

export const AppProvider = ({children}: {children: any}) => {
  const [data, setData] = useState(menuList);
  const [totalChart, setTotalChart] = useState(0);

  const updateTotalChart = (id: number, operationType: 'Add' | 'Min') => {
    const updatedData = data.map(menu => {
      if (menu.id === id) {
        return {
          ...menu,
          totalChart:
            operationType === 'Add' ? menu.totalChart + 1 : menu.totalChart - 1,
        };
      }

      return menu;
    });

    setData(updatedData);
  };

  useEffect(() => {
    let total = 0;
    data.forEach(item => {
      total += item.totalChart;
    });
    setTotalChart(total);
  }, [data]);

  return (
    <AppContext.Provider
      value={{
        data,
        totalChart,
        updateTotalChart,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
