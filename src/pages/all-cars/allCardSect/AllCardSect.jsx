// import ReactDOM from 'react-dom/client';
// import { Menu } from 'antd';
// import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';

// const { createRoot } = ReactDOM;

// export const AllCardSect = () => {
//   const items = [
//     {
//       key: 'sub1',
//       label: 'Навигация Один',
//       icon: <MailOutlined />,
//       children: [
//         {
//           key: 'g1',
//           label: 'Элемент 1',
//           type: 'group',
//           children: [
//             {
//               key: '1',
//               label: 'Опция 1',
//             },
//             {
//               key: '2',
//               label: 'Опция 2',
//             },
//           ],
//         },
//         {
//           key: 'g2',
//           label: 'Элемент 2',
//           type: 'group',
//           children: [
//             {
//               key: '3',
//               label: 'Опция 3',
//             },
//             {
//               key: '4',
//               label: 'Опция 4',
//             },
//           ],
//         },
//       ],
//     },
//     {
//       key: 'sub2',
//       label: 'Навигация Два',
//       icon: <AppstoreOutlined />,
//       children: [
//         {
//           key: '5',
//           label: 'Опция 5',
//         },
//         {
//           key: '6',
//           label: 'Опция 6',
//         },
//         {
//           key: 'sub3',
//           label: 'Подменю',
//           children: [
//             {
//               key: '7',
//               label: 'Опция 7',
//             },
//             {
//               key: '8',
//               label: 'Опция 8',
//             },
//           ],
//         },
//       ],
//     },
//     {
//       key: 'sub4',
//       label: 'Навигация Три',
//       icon: <SettingOutlined />,
//       children: [
//         {
//           key: '9',
//           label: 'Опция 9',
//         },
//         {
//           key: '10',
//           label: 'Опция 10',
//         },
//         {
//           key: '11',
//           label: 'Опция 11',
//         },
//         {
//           key: '12',
//           label: 'Опция 12',
//         },
//       ],
//     },
//     {
//       key: 'grp',
//       label: 'Группа',
//       type: 'group',
//       children: [
//         {
//           key: '13',
//           label: 'Опция 13',
//         },
//         {
//           key: '14',
//           label: 'Опция 14',
//         },
//       ],
//     },
//   ];

//   const onClick = (e) => {
//     console.log('click ', e);
//   };

//   return (
//     <Menu
//       onClick={onClick}
//       style={{
//         width: 256,
//       }}
//       defaultSelectedKeys={['1']}
//       defaultOpenKeys={['sub1']}
//       mode="inline"
//       items={items}
//     />
//   );
// };

// const mountNode = document.getElementById('mountNode'); // Убедитесь, что этот элемент существует в вашем HTML
// const ComponentDemo = AllCardSect;
// createRoot(mountNode).render(<ComponentDemo />);
