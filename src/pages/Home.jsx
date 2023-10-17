import React from 'react'
import Nav from '../components/nav/Nav'
import { Link } from 'react-router-dom'
import BannerSlider from '../components/slider/BannerSlider'
import Container from '../components/Layout/Container'
import Grid from '../components/Grid'
import OfferItem from '../components/offerPart/OfferItem'
import Company from '../components/companys/Company'
import Chanel from '../assets/Chanel.svg'
import Burberry from '../assets/Burberry.svg'
import Dior from '../assets/Dior.svg'
import Fendi from '../assets/Fendi.svg'
import Gucci from '../assets/Gucci.svg'
import Versacf from '../assets/Versacf.svg'
import Armani from '../assets/Chanel.svg'

import ImageComp from '../components/ImageComp'
import offer1 from '../assets/offer1.jpg'
import offer2 from '../assets/offer2.jpg'
import offer3 from '../assets/offer3.jpg'
import Heading from '../components/Heading'
import Flex from '../components/Flex'
import Pagination from '../components/pagination/Pagination'
import Input from '../components/Input'
import Label from '../components/Label'
import List from '../components/List/List'
import ListItem from '../components/List/ListItem'





const Home = () => {
  return (
    <>
        <Nav />
        <section>
          <Container>
            <BannerSlider />
          </Container>
        </section>

        <section className='mt-3'>
          <Container>
            <Grid className='grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-8 lg:p-7 lg:border-2 relative'>
              <Heading tagName='h5' className='hidden lg:block absolute top-0 left-1/2 -translate-y-1/2 -translate-x-1/2 px-16 capitalize font-Oswald font-normal text-2xl text-black bg-white' title='chose your brand' />
              <Company className="h-14 border-2 flex justify-center items-center hover:bg-dividerColor cursor-pointer ease-in duration-300" >
                  <Link>
                    <ImageComp imageSrc={Chanel} />
                  </Link>
              </Company>
              <Company className="h-14 border-2 flex justify-center items-center hover:bg-dividerColor cursor-pointer ease-in duration-300"  >
                  <Link>
                    <ImageComp imageSrc={Burberry} />
                  </Link>
              </Company>
              <Company className="h-14 border-2 flex justify-center items-center hover:bg-dividerColor cursor-pointer ease-in duration-300"  >
                  <Link>
                    <ImageComp imageSrc={Dior} />
                  </Link>
              </Company>
              <Company className="h-14 border-2 flex justify-center items-center hover:bg-dividerColor cursor-pointer ease-in duration-300"  >
                  <Link>
                    <ImageComp imageSrc={Fendi} />
                  </Link>
              </Company>
              <Company className="h-14 border-2 flex justify-center items-center hover:bg-dividerColor cursor-pointer ease-in duration-300"  >
                  <Link>
                    <ImageComp imageSrc={Gucci} />
                  </Link>
              </Company>
              <Company className="h-14 border-2 flex justify-center items-center hover:bg-dividerColor cursor-pointer ease-in duration-300"  >
                  <Link>
                    <ImageComp imageSrc={Versacf} />
                  </Link>
              </Company>
              <Company className="h-14 border-2 flex justify-center items-center hover:bg-dividerColor cursor-pointer ease-in duration-300"  >
                  <Link>
                    <ImageComp imageSrc={Fendi} />
                  </Link>
              </Company>
              <Company className="h-14 border-2 flex justify-center items-center hover:bg-dividerColor cursor-pointer ease-in duration-300"  >
                  <Link>
                    <ImageComp imageSrc={Armani} />
                  </Link>
              </Company>
            </Grid>
          </Container>
        </section>

        <section className='mt-3 lg:mt-8'>
          <Container>
            <Grid className="grid gap-y-3 lg:grid-cols-2 lg:grid-rows-2 lg:gap-8">
              <OfferItem className="object-cover bg-no-repeat bg-cover bg-center">
                <Link>
                  <ImageComp className="w-full" imageSrc={offer1} />
                </Link>
              </OfferItem>

              <OfferItem className="row-span-2 object-cover bg-no-repeat bg-cover bg-top">
                <Link>
                  <ImageComp className="w-full" imageSrc={offer2} />
                </Link>
              </OfferItem>

              <OfferItem className="object-cover bg-no-repeat bg-cover bg-center">
                <Link>
                  <ImageComp className="w-full" imageSrc={offer3} />
                </Link>
              </OfferItem>
            </Grid>
          </Container>
        </section>

        <section>
          <Container>
            <Flex className="lg:flex lg:gap-4">
              <div className='lg:w-3/12 relative lg:after:absolute lg:after:top-0 lg:after:right-0 lg:after:w-1 lg:after:h-full lg:after:bg-red-500'>
                <Heading tagName="h3" className="" title="Shop some Wear:" />
                <List>
                  <ListItem>
                    <Input className="" type="checkbox" id="bestSellers">
                      <Label for="bestSellers" title="best sellers" />
                    </Input>
                  </ListItem>
                  <ListItem>
                    <Input className="" type="checkbox" id="newArivals">
                      <Label for="newArivals" title="NEW Arivals" />
                    </Input>
                  </ListItem>
                  <ListItem>
                    <Input className="" type="checkbox" id="topWomen">
                      <Label for="topWomen" title="TOP women" />
                    </Input>
                  </ListItem>
                  <ListItem>
                    <Input className="" type="checkbox" id="summer">
                      <Label for="summer" title="Collection: Summer" />
                    </Input>
                  </ListItem>
                  <ListItem>
                    <Input className="" type="checkbox" id="spring">
                      <Label for="spring" title="Collection: spring" />
                    </Input>
                  </ListItem>
                  <ListItem>
                    <Input className="" type="radio" id="trending">
                      <Label for="trending" title="TREnding" />
                    </Input>
                  </ListItem>
                </List>
              </div>
              <div className='lg:w-9/12'>
                <Pagination itemsPerPage="8" />
              </div>
            </Flex>
          </Container>
        </section>
    </>
  )
}

export default Home