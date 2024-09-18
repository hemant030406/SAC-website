import React, { useEffect } from 'react'
import ActCard from '../ActCard/ActCard'
import { FaBars } from 'react-icons/fa'
import './LayoutRight.css'

const LayoutLeft = () => {

    
    const tempUrl = "https://imgs.search.brave.com/UWcdz0qOM8w4GiYkAf4whayq8imfZEFa_sqmPBXgUww/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuY3RmYXNzZXRz/Lm5ldC9ocmx0eDEy/cGw4aHEvNTU5Nnoy/QkNSOUttVDFLZVJC/ck9RYS80MDcwZmQ0/ZTJmMWExM2Y3MWMy/YzQ2YWZlYjE4ZTQx/Yy9zaHV0dGVyc3Rv/Y2tfNDUxMDc3MDQz/LWhlcm8xLmpwZz9m/aXQ9ZmlsbCZ3PTYw/MCZoPTEyMDA"
    
    const Activities = [
        {
            imgUrl: tempUrl,
            name: "Name",
            club: "YACC",
            content: "Lorem ipsum dolor..."
        },
        {
            imgUrl: tempUrl,
            name: "Name",
            club: "YACC",
            content: "Lorem ipsum dolor..."
        },
        {
            imgUrl: tempUrl,
            name: "Name",
            club: "YACC",
            content: "Lorem ipsum dolor..."
        },
        {
            imgUrl: tempUrl,
            name: "Name",
            club: "YACC",
            content: "Lorem ipsum dolor..."
        },
        {
            imgUrl: tempUrl,
            name: "Name",
            club: "YACC",
            content: "Lorem ipsum dolor..."
        },
    ]

    let isRightVis = false;

    const displayRightMenu = () => {
        if (!isRightVis) {
            document.querySelector('.dash-right').style.display = 'inline-flex'
            let rtmnu = document.querySelector('.rightMenu')
            rtmnu.style.backgroundColor = 'rgb(250 199 170)'
            rtmnu.style.height = '100%'
            rtmnu.style.width = '22rem'
            rtmnu.style.paddingLeft = '1rem'
            document.querySelector('.rightHam').style.right = 0
            isRightVis = true
        }
        else {
            let rtmnu = document.querySelector('.rightMenu')
            rtmnu.style.backgroundColor = 'white'
            rtmnu.style.height = '5rem'
            rtmnu.style.width = '5rem'
            rtmnu.style.paddingLeft = '0rem'
            document.querySelector('.dash-right').style.display = 'none'
            isRightVis = false
        }
    }

    const changeDisplay = () => {
        if (window.innerWidth < 1440) {
            let rtmnu = document.querySelector('.rightMenu')
            rtmnu.style.backgroundColor = 'white'
            rtmnu.style.height = '5rem'
            rtmnu.style.width = '5rem'
            rtmnu.style.paddingLeft = '0rem'
            document.querySelector('.rightHam').style.display = 'inline-flex'
            document.querySelector('.dash-right').style.display = 'none'
            document.querySelector('.dash-right').style.marginTop = '5rem'
        } else {
            let rtmnu = document.querySelector('.rightMenu')
            rtmnu.style.backgroundColor = 'white'
            rtmnu.style.height = '100%'
            rtmnu.style.width = '22rem'
            rtmnu.style.paddingLeft = '1rem'
            document.querySelector('.rightHam').style.display = 'none'
            document.querySelector('.dash-right').style.marginTop = '3rem'
            document.querySelector('.dash-right').style.display = 'inline-flex'
        }
    }

    useEffect(() => {

        changeDisplay()

        let previousWidth = window.innerWidth;

        const handleResize = () => {
            let currwidth = window.innerWidth;
            if (currwidth !== previousWidth) {
                changeDisplay()
                previousWidth = currwidth;
            }
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [])

    return (
        <div className="rightMenu">
            <div className='rightHam' onClick={() => displayRightMenu()} >
                <FaBars size={40} />
            </div>
            <div className="dash-right" style={{ marginRight: '1rem', width: '20rem', marginTop: '3rem' }}>
                <div className='d-flex flex-row flex-end' style={{ justifyContent: 'flex-end' }}>
                    <div className='d-flex username'>UserName</div>
                    <div>
                        <img src={tempUrl} class="rounded-circle" alt="..." style={{ width: '3rem', height: '3rem' }} />
                    </div>
                </div>
                <div style={{ marginTop: '1rem' }}>
                    <h3>Activity</h3>
                    {
                        Activities.map((activity, ind) => (
                            <ActCard imgUrl={activity.imgUrl} name={activity.name} club={activity.club} content={activity.content} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default LayoutLeft
