import { Fragment } from "react";

const LeftMeun = () => {

    const menuOptions = [
        { title: 'SHELTERS', subTitle: ['Tents', 'Sleeping Bags', 'Furniture', 'Kitchen'] },
        { title: 'WEARS', subTitle: ['Clouthes', 'Footwears', 'Backpacks'] },
        { title: 'TOOLS & NECESSITIES', subTitle: ['Gadgets', 'Treatment'] }
    ]

    return (
        <div className='leftmenu'>
            <div className='leftmenu__header'>
                <h5 className='leftmenu__text leftmenu__text--title'>CATEGORIES</h5>
            </div>
            <div className='leftmenu__body'>
                {menuOptions.map((item) => {
                    return (
                        <Fragment key={item.title}>
                            <p className='leftmenu__text leftmenu__text--subtitle'>{item.title}</p>
                            {item.subTitle.map((subItem) => {
                                return (
                                    <p key={subItem} className='leftmenu__text leftmenu__text--body'>{subItem}</p>
                                );
                            })}
                        </Fragment>
                    )
                })}
            </div>
        </div>
    )
}

export default LeftMeun;