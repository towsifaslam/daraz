import React from 'react'
import catagory from'../../picture/catagory1.jpg';
import Tag from './Tag';

export default function Index() {
  const catagoryList  = [
    {id:1,
     link: "Women's & Girls' Fashion" 
    }
    ,
    {id:1,
      link: "Women's & Girls' Fashion" 
     },
     {id:1,
      link: "Women's & Girls' Fashion" 
     } ,{id:1,
      link: "Women's & Girls' Fashion" 
     } ,{id:1,
      link: "Women's & Girls' Fashion" 
     },
     {id:1,
      link: "Women's & Girls' Fashion" 
     }
     ,
     {id:1,
      link: "Women's & Girls' Fashion" 
     } ,{id:1,
      link: "Women's & Girls' Fashion" 
     } ,{id:1,
      link: "Women's & Girls' Fashion" 
     },
     {id:1,
      link: "Women's & Girls' Fashion" 
     }
  ] 
  return (
    <>
    <div className='w-full mt-7 bg-fuchsia-200'>
      <div className=' max-w-screen-lg mx-auto flex justify-between '>
        <div className=''>
          <ul className='space-y-1  ml-9  '>
            {
              catagoryList.map((list)=>(
                <li className='hover:underline hover:scale-100 duration-100'>{list.link}</li>
              ))
            }

          </ul>
        </div>
        <img src={catagory} alt="" className='  w-2/3'/>
      </div>
     
    </div>
    <Tag />
    </>

  )
}
