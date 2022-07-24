import React from 'react';
import { GridComponent, ColumnsDirective, Page, Search, Edit, Inject, ColumnDirective } from '@syncfusion/ej2-react-grids';

import { employeesData, employeesGrid } from '../data/dummy';
import { Header } from '../components';

const Employees = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category="Page" title="Employees"/>
      <GridComponent
        id='gridcomp'
      >
        <ColumnsDirective>
          {employeesGrid.map((item, idx) => (
            <ColumnDirective key={idx} {...item}/>
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Search]}/>
      </GridComponent>
    </div>
  )
}

export default Employees