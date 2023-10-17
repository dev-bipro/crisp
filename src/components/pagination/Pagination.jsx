import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import p1 from '../../assets/Pagination/p1.jpg'
import p2 from '../../assets/Pagination/p2.jpg'
import p3 from '../../assets/Pagination/p3.jpg'
import p4 from '../../assets/Pagination/p4.jpg'
import p5 from '../../assets/Pagination/p5.jpg'
import p6 from '../../assets/Pagination/p6.jpg'
import p7 from '../../assets/Pagination/p7.jpg'
import p8 from '../../assets/Pagination/p8.jpg'
import p9 from '../../assets/Pagination/p9.jpg'
import p10 from '../../assets/Pagination/p10.jpg'
import p11 from '../../assets/Pagination/p11.jpg'
import p12 from '../../assets/Pagination/p12.jpg'
import p13 from '../../assets/Pagination/p13.jpg'
import ImageComp from '../ImageComp';
import Heading from '../Heading';
import Flex from '../Flex';
import Paragraph from '../Paragraph';

// Example items, to simulate fetching from another resources.
const items = [
    {
        images:p1,
        type:"top women",
        productName:"angels malu zip jeans slim black used",
        price:"139,00",
        oldPrice:"",
        badge:""
    },
    {
        images:p2,
        type:"top women",
        productName:"angels malu zip jeans slim black used",
        price:"235,00",
        oldPrice:"",
        badge:""
    },
    {
        images:p3,
        type:"top women",
        productName:"angels malu zip jeans slim black used",
        price:"90,00",
        oldPrice:"",
        badge:""
    },
    {
        images:p4,
        type:"top women",
        productName:"angels malu zip jeans slim black used",
        price:"139,00",
        oldPrice:"199,00 ",
        badge:"-30%"
    },
    {
        images:p5,
        type:"top women",
        productName:"angels malu zip jeans slim black used",
        price:"139,00",
        oldPrice:"",
        badge:""
    },
    {
        images:p6,
        type:"top women",
        price:"139,00",
        oldPrice:"119,00 ",
        productName:"angels malu zip jeans slim black used",
        badge:"-30%"
    },
    {
        images:p7,
        type:"top women",
        productName:"angels malu zip jeans slim black used",
        price:"139,00",
        oldPrice:"",
        badge:""
    },
    {
        images:p8,
        type:"top women",
        productName:"angels malu zip jeans slim black used",
        price:"139,00",
        oldPrice:"",
        badge:"-25%"
    },
    {
        images:p9,
        type:"top women",
        productName:"angels malu zip jeans slim black used",
        price:"139,00",
        oldPrice:"",
        badge:""
    },
    {
        images:p10,
        type:"top women",
        productName:"angels malu zip jeans slim black used",
        price:"139,00",
        oldPrice:"",
        badge:""
    },
    {
        images:p11,
        type:"top women",
        productName:"angels malu zip jeans slim black used",
        price:"139,00",
        oldPrice:"",
        badge:""
    },
    {
        images:p12,
        type:"top women",
        productName:"angels malu zip jeans slim black used",
        price:"139,00",
        oldPrice:"199,00",
        badge:""
    },
    {
        images:p13,
        type:"top women",
        productName:"angels malu zip jeans slim black used",
        price:"139,00",
        oldPrice:"199,00",
        badge:""
    },
];

function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item) => (
            // console.log(item)
          <div className={`${item.badge && "relative"} w-full lg:w-[22%] hover:cursor-pointer hover:drop-shadow-3xl`}>
            {
                item.badge &&
                    <Paragraph className='absolute top-3 left-0 py-2 px-3 bg-black text-white' title={item.badge} />
            }
            <div>
                <ImageComp className="w-full" imageSrc={item.images} />
            </div>
            <div className="py-4">
                <Heading tagName="h6" className="capitalize font-Oswald font-semibold text-xs text-grayColorFour mb-1" title={item.type} />
                <Heading tagName="h4" className="capitalize font-Oswald font-medium text-lg text-black mb-4" title={item.productName} />
                <Flex className={`${item.oldPrice && "flex gap-2 items-end"}`}>
                    <Paragraph className='capitalize font-Oswald font-light text-2xl text-black' title={`${item.price} EUR`} />
                    {
                        item.oldPrice &&
                            <Paragraph className='capitalize font-Oswald font-light text-sm text-grayColor line-through' title={`${item.oldPrice} EUR`} />
                    }
                </Flex>
            </div>
          </div>
        ))}
    </>
  );
}

function Pagination ({ itemsPerPage }) {
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
        <Flex className={`flex flex-wrap ${itemsPerPage == currentItems.length ? "justify-between" : "gap-[4%]"}`}>
            <Items currentItems={currentItems} />
        </Flex>
        <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        />
    </>
  );
}

// Add a <div id="container"> to your HTML to see the component rendered.
export default Pagination