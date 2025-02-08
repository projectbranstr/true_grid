// import { Box } from '@mantine/core';
// import { DataTable } from 'mantine-datatable';
// import "mantine-datatable/styles.css"
// import "mantine-datatable/styles.layer.css"
// import { useState } from 'react';
// import { employees, companies, departments } from '../../../data/api';  // Importing the dummy data
// import dayjs from 'dayjs';
// import clsx from 'clsx';

// const NestedTable = () => {
//   const [expandedCompanyIds, setExpandedCompanyIds] = useState([]);
//   const [expandedDepartmentIds, setExpandedDepartmentIds] = useState([]);

//   return (
//     <DataTable
//       withTableBorder
//       withColumnBorders
//       highlightOnHover
//       columns={[
//         {
//           accessor: 'name',
//           title: 'Company / Department / Employee',
//           noWrap: true,
//           render: ({ id, name }) => (
//             <>
//               <span className="">
//                 {expandedCompanyIds.includes(id) ? '-' : '+'}
//               </span>
//               <span>{name}</span>
//             </>
//           ),
//         },
//         { accessor: 'employees', title: 'Employees / Birth date', textAlign: 'right', width: 200 },
//       ]}
//       records={companies}
//       rowExpansion={{
//         allowMultiple: true,
//         expanded: { recordIds: expandedCompanyIds, onRecordIdsChange: setExpandedCompanyIds },
//         content: (company) => (
//           <DataTable
//             noHeader
//             withColumnBorders
//             columns={[
//               {
//                 accessor: 'name',
//                 noWrap: true,
//                 render: ({ id, name }) => (
//                   <Box component="span" ml={20}>
//                     <span className={clsx(classes.expandIcon, {
//                       [classes.expandIconRotated]: expandedDepartmentIds.includes(id),
//                     })}>
//                       {expandedDepartmentIds.includes(id) ? '-' : '+'}
//                     </span>
//                     <span>{name}</span>
//                   </Box>
//                 ),
//               },
//               { accessor: 'employees', textAlign: 'right', width: 200 },
//             ]}
//             records={departments.filter((department) => department.company.id === company.record.id)}
//             rowExpansion={{
//               allowMultiple: true,
//               expanded: { recordIds: expandedDepartmentIds, onRecordIdsChange: setExpandedDepartmentIds },
//               content: (department) => (
//                 <DataTable
//                   noHeader
//                   withColumnBorders
//                   columns={[
//                     {
//                       accessor: 'name',
//                       render: ({ firstName, lastName }) => (
//                         <Box component="span" ml={40}>
//                           <span>{firstName} {lastName}</span>
//                         </Box>
//                       ),
//                     },
//                     {
//                       accessor: 'birthDate',
//                       render: ({ birthDate }) => dayjs(birthDate).format('DD MMM YYYY'),
//                       textAlign: 'right',
//                       width: 200,
//                     },
//                   ]}
//                   records={employees.filter((employee) => employee.department.id === department.record.id)}
//                 />
//               ),
//             }}
//           />
//         ),
//       }}
//     />
//   );
// };

// export default NestedTable;
