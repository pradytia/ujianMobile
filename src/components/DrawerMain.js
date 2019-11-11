import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Icon } from 'react-native-elements';
import Settings from './Settings';
import TabMainMenu from './TabMainMenu';

const DrawerNavigator = createAppContainer(createDrawerNavigator(
    {
        //sebuah route . menentukan route dan pindah kemana
        MainMenu: { 
            screen: TabMainMenu,
            navigationOptions: {
                drawerLabel: () => null // untuk menghilangkan tulisan main menu di header
            }
        },
        // sebuah route
        Settings: {
            screen: Settings, //otomatis sudah kirim props stack navigais dari drawer untuk di akses di class component settings , semua props yang dimiliki drawer akan dikirim ke anak/childnya
            navigationOptions: {
                drawerLabel: 'Settings', //hanya sebuah tulisan di header settings , kalo g dikasih defaultnya akan dikasih nama routenya yaitu properti settings
                drawerIcon: ({ tintColor }) => (
                    <Icon name={'cog'} type='font-awesome' size={25} color={tintColor} />
                )
            }
        }
    },
    {
        drawerBackgroundColor: '#fff',
        drawerPosition: 'right',
        drawerType: 'slide',
        overlayColor: 1,
        style: {
            borderColor: '#cfcfcf',
            borderWidth: 1,
        },
        contentOptions: {
            activeTintColor: 'black'
        }
     }
));

export default DrawerNavigator;