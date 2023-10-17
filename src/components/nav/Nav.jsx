import React, { useEffect, useRef, useState } from 'react'
import Container from '../Layout/Container'
import Flex from '../Flex'
import {FaBars, FaAngleRight} from 'react-icons/fa'
import {RiCloseLine} from 'react-icons/ri'
import {BiSearch} from 'react-icons/bi'
import {GiShoppingBag} from 'react-icons/gi'
import {AiOutlineHeart} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import ImageComp from '../ImageComp'
import Logo from '../../assets/logo.svg'
import List from '../List/List'
import ListItem from '../List/ListItem'
import Input from '../Input'
import Button from '../Button'
import Paragraph from '../Paragraph'

const Nav = () => {

  const [menuShow,setMenuShow] = useState(true) ;
  const [searchShow,setSearchShow] = useState(true) ;
  const searchRef = useRef() ;
  // console.log(searchRef);

  useEffect(()=>{
    function menuResize(){
      // console.log(window.innerWidth < 768);
      window.innerWidth < 1024 ? setMenuShow(true) : setMenuShow(false) ;
    }
    window.addEventListener("resize",menuResize) ;
    menuResize()

    document.body.addEventListener("click",(e)=>{
      console.log("ref",searchRef);
      console.log(searchRef.current);
      console.log("tar",e.target);

      if(searchRef.current){
        console.log("null ASE")
        if(!searchRef.current.contains(e.target)){
          setSearchShow(true)
          // console.log(searchShow);
        }
      }else{
        setSearchShow(!searchShow)
      }

      
      // }else{
      //   setSearchShow(true)
      //   // console.log(searchShow);
      // };
    })
  },[])

  return (
    <nav className='w-full bg-black py-2.5 relative z-10'>
        <Container>
            <Flex className="flex justify-between items-center">
              <div className='text-white text-xl lg:order-1'>
                {
                  menuShow ?
                    <FaBars onClick={()=>setMenuShow(false)} className='lg:hidden' />
                  :
                    <>
                      <RiCloseLine onClick={()=>setMenuShow(true)} className='lg:hidden' />

                      <List className='text-center lg:text-start Paragraph-3 lg:Paragraph-0 bg-black lg:bg-transparent absolute lg:relative bottom-0 left-0 translate-y-full lg:translate-y-0 lg:flex lg:gap-6'>
                        <ListItem className='flex lg:hidden'>
                          <Input className='Paragraph-3.5 w-full capitalize font-Roboto text-xs font-normal text-grayColor' type='srarch' placeHolder='Type something...' />
                          <Button className='py-3.5 px-5 capitalize font-Oswald text-xs font-medium text-grayColor tracking-wide bg-dividerColor hover:bg-lightBlueHoverColor ease-in duration-300' title='find' />
                        </ListItem>
                        <ListItem className='uppercase font-Oswald font-medium text-lg lg:text-sm text-white my-3'>
                          <Link>
                            <span className='inline-block'>trending</span>
                            <FaAngleRight className='inline-block ml-5 lg:hidden' />
                          </Link>
                        </ListItem>
                        <ListItem className='uppercase font-Oswald font-medium text-lg lg:text-sm text-white my-3'>
                          <Link>
                            <span>faangleright</span>
                            <FaAngleRight className='inline-block ml-auto lg:hidden' />
                          </Link>
                        </ListItem>
                        <ListItem className='uppercase font-Oswald font-medium text-lg lg:text-sm text-white my-3'>
                          <Link>
                            <span>new</span>
                            <FaAngleRight className='inline-block ml-auto lg:hidden' />
                          </Link>
                        </ListItem>
                        <ListItem className='uppercase font-Oswald font-medium text-lg lg:text-sm text-white my-3'>
                          <Link>
                            <span>sale</span>
                            <FaAngleRight className='inline-block ml-auto lg:hidden' />
                          </Link>
                        </ListItem>
                        <ListItem className='uppercase font-Oswald font-medium text-lg lg:text-sm text-white my-3'>
                          <Link>
                            <span>brands</span>
                            <FaAngleRight className='inline-block ml-auto lg:hidden' />
                          </Link>
                        </ListItem>
                        <ListItem re={searchRef} className='hidden lg:block uppercase font-Oswald font-medium text-lg lg:text-sm text-white my-3 cursor-pointer'>
                          <>
                            {
                              searchShow ?
                                <div onClick={()=>setSearchShow(false)}>
                                  <BiSearch className='inline-block mr-2 text-xl' />
                                  <span>search</span>
                                </div>
                              :
                                <div  className='max-w-sm relative'>
                                  <Input className='w-full Paragraph-2 bg-transparent border-b-2 focus:outline-none' type="text" placeHolder='search' />
                                  <BiSearch className='absolute top-1/2 right-2 -translate-y-1/2 text-xl' />
                                  {/* <input class="focus:outline-none" type="text" placeholder="Focus me" /> */}
                                </div>
                            }
                          </>
                        </ListItem>
                      </List>
                    </>
                }
              </div>
              <div>
                <Link>
                  <ImageComp imageSrc={Logo} />
                </Link>
              </div>
              <Flex className='flex items-center text-white gap-5 text-xl lg:order-2'>
                <BiSearch className='lg:hidden' />
                <GiShoppingBag className='lg:hidden' />
                <Flex className='hidden lg:flex gap-3 items-center'>
                  <Paragraph className='capitalize font-Oswald font-semibold text-sm'>sign in</Paragraph>
                  
                  <Paragraph className='capitalize font-Oswald font-semibold text-sm'>create an account</Paragraph>
                </Flex>
                <AiOutlineHeart className='hidden lg:block' />
                <Flex className='hidden lg:flex gap-3 items-center'>
                  <GiShoppingBag />
                  <div>
                    <Paragraph className='capitalize font-Roboto font-normal text-xs'>shopping cart</Paragraph>
                    <Paragraph className='capitalize font-Roboto font-bold text-sm'>0,00 EUR</Paragraph>
                  </div>
                </Flex>


              </Flex>
            </Flex>
        </Container>
    </nav>
  )
}

export default Nav