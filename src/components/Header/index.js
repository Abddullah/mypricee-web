import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './SearchBar/index'
import HeaderDropdown from './HeaderDropdown/index'
// import 'antd/dist/antd.css';
import { useSelector, useDispatch } from 'react-redux';
import './index.css';
import { Menu, Dropdown, Button } from 'antd';
import { fetchCategories } from '../../Store/action/category';
import { Gradient } from 'react-gradient';
import { DownOutlined, MenuOutlined } from '@ant-design/icons';
import { FaFacebookF, FaTwitter, FaGoogle, } from 'react-icons/fa';
import { BiMenu } from 'react-icons/bi';
const { SubMenu } = Menu;


const gradients = [
    ['#993492', '#E83988'],
];

const menu = (
    <Menu>
        <Menu.Item>
            <a >
                Arabi
            </a>
        </Menu.Item>
        <Menu.Item>
            <a>
                English
            </a>
        </Menu.Item>
        <Menu.Item>
            <a >
                Urdu
            </a>
        </Menu.Item>
    </Menu>
);

const Categories = ({ categoriesMenu }) => (
    <Menu>
        {
            (categoriesMenu && categoriesMenu.length && categoriesMenu.length > 0) ? (
                categoriesMenu.map((categoryMenu, index) => {
                    console.log(categoryMenu, 'categoryMenucategoryMenu')
                    return (
                        (categoryMenu.subcategories && categoryMenu.subcategories.length && categoryMenu.subcategories.length > 0) ?
                            (
                                <SubMenu title={categoryMenu.categoryName} >
                                    {
                                        categoryMenu.subcategories.map((subCat, subCatIndex) => {
                                            return (
                                                <Menu.Item>
                                                    {subCat.subCategoryName}
                                                </Menu.Item>
                                            )
                                        })
                                    }

                                </SubMenu>
                            ) : (
                                <Menu.Item>
                                    {categoryMenu.categoryName}
                                </Menu.Item>
                            )
                    )
                })
            ) : null
        }

        {/* <SubMenu title="Mobiles, Tablets & Wearables" >
            <Menu.Item>Mobile Phones</Menu.Item>
            <Menu.Item>Tablets & EReaders</Menu.Item>
            <Menu.Item>Mobile & Tablets Accessories</Menu.Item>
            <Menu.Item>Wearables</Menu.Item>
        </SubMenu>

        <Menu.Item>
            Computers
        </Menu.Item>
        <Menu.Item>
            Video Games & Consoles
        </Menu.Item>
        <Menu.Item>
            Audio
        </Menu.Item>
        <Menu.Item>
            Office Supplies
        </Menu.Item>
        <Menu.Item>
            Home Appliances
        </Menu.Item>
        <Menu.Item>
            Personal Care & Beauty
        </Menu.Item>
        <Menu.Item>
            Car Parts & Accessories
        </Menu.Item>
        <Menu.Item>
            Men Fashion
        </Menu.Item>
        <Menu.Item>
            Men Fashion
        </Menu.Item>
        <Menu.Item>
            Women Fashion
        </Menu.Item>
        <Menu.Item>
            Books
        </Menu.Item>
        <Menu.Item>
            Sports Equipment
        </Menu.Item> */}

    </Menu >
);

const Header = () => {
    const dispatch = useDispatch();
    const categoriesMenu = useSelector(({ categories }) => categories.categories);
    useEffect(() => {
        fetchAllCategories();
    }, [])

    const fetchAllCategories = () => {
        dispatch(fetchCategories());
    }

    return (
        <Gradient
            gradients={gradients}
            property="background"
            duration={4000}
            angle="45deg"
            style={{
                display: "flex",
                flex: 1,
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: 200,
                minWidth: 1200
            }}
        >

            <div style={{
                display: "flex",
                width: "70%",
                minWidth: "70%",
                flexWrap: "wrap",
                flexDirection: "row",
                // background: "blue"
            }}>

                <div style={{
                    display: "flex", flex: 1.5, height: 50, justifyContent: "center", alignItems: "center", marginRight: 0,
                    // background: "red"
                }}>
                    <img src={require('../../../src/assets/logo.png')} className="logoStyle" />
                </div>

                <div style={{
                    display: "flex", flex: 6, height: 50,
                    // background: "blue"
                }}>
                    <SearchBar />
                </div>

                <div style={{
                    display: "flex", flex: 1.5, height: 50,
                    // background: "red"
                }}>
                    <div style={{
                        display: "flex", marginLeft: 30, justifyContent: "center", alignItems: "center",
                        // background: "red"
                    }}>
                        <img src={require('../../../src/assets/languageFlag.png')} className="languageFlag" />
                        <Dropdown overlay={menu} >
                            <a style={{ marginLeft: 10, color: "#fff", fontSize: 11, fontWeight: 500, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }} className="ant-dropdown-link">
                                Arabi <DownOutlined style={{ marginLeft: 10 }} />
                            </a>
                        </Dropdown>
                        <FaFacebookF style={{ color: "white", justifyContent: "center", alignItems: "center", marginLeft: 30, cursor: 'pointer' }} />
                        <FaTwitter style={{ color: "white", justifyContent: "center", alignItems: "center", marginLeft: 20, cursor: 'pointer', fontSize: 10 }} />
                        <FaGoogle style={{ color: "white", justifyContent: "center", alignItems: "center", marginLeft: 20, cursor: 'pointer', fontSize: 10 }} />
                    </div>
                </div>
            </div>

            <div style={{
                display: "flex",
                minWidth: "70%",
                marginTop: "1%",
                flexWrap: "wrap",
                flexDirection: "row",
                // background: "red"
            }}>
                <div style={{
                    display: "flex",
                    flex: 1.5,
                    height: 50,
                    justifyContent: "center",
                    alignItems: "center",
                    // background: "red"
                }}>
                    <div style={{
                        display: "flex",
                        background: "#521C87",
                        height: 40,
                        width: "90%",
                        minWidth: 100,
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 5,
                        cursor: 'pointer',
                        // background:"red"
                    }}>
                        <Dropdown overlay={<Categories categoriesMenu={categoriesMenu} />} overlayStyle={{ width: 300 }}>
                            <div
                                className="ant-dropdown-link"
                                style={{
                                    display: "flex",
                                    minWidth: "100%",
                                    flexDirection: "row",
                                    color: "#fff",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    padding: "2%",
                                    overflow: "hidden",
                                    // background: "red"
                                }}
                            >
                                <div style={{ display: "flex" }} >
                                    <BiMenu style={{ display: "flex", color: "white", fontSize: 18, marginRight: 10, marginLeft: 5, cursor: 'pointer' }} />
                                </div>

                                <div style={{ display: "flex", fontSize: 11, fontWeight: "bold", marginRight: 5, }} >
                                    ALL CATEGORIES
                                    </div>
                            </div>
                        </Dropdown>
                    </div>
                </div>

                <div style={{
                    display: "flex",
                    flex: 6,
                    height: 50,
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    // background: "blue"
                }}>
                    <HeaderDropdown catMenu={categoriesMenu} />
                </div>

                <div
                    style={{
                        display: "flex",
                        flex: 1.5,
                        height: 50,
                        justifyContent: "center",
                        alignItems: "center",
                        marginLeft: 10,
                        // background: "red"
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            width: "60%",
                            borderRadius: 4,
                            height: 35,
                            fontWeight: 500,
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: '#521C87',
                            borderColor: '#521C87',
                            borderColor: 'red',
                            borderWidth: 2,
                            color: "white",
                            cursor: "pointer"
                        }}
                    >
                        LOGIN
                        </div>
                    <div
                        className="buttonSignup"
                        style={{
                            marginLeft: 10,
                            display: "flex",
                            width: "60%",
                            borderRadius: 4,
                            height: 35,
                            fontWeight: 500,
                            justifyContent: "center",
                            alignItems: "center",
                            color: "white",
                            cursor: "pointer"
                        }}
                    >
                        SIGNUP
                        </div>
                </div>
            </div>


        </Gradient >

    );
};


export default Header;




