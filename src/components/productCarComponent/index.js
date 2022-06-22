import React,{ useState } from 'react'

import { Card, Image } from 'react-bootstrap'
import { AiOutlineEye } from 'react-icons/ai'

import './styles.scss'

const ProductCard = ({item, action}) => {

    const { name, description, image } = item

    
    const [views, setviews] = useState(0)
  
    const shortDescription = description.slice(0,55)+"..."
    const shortName = name.slice(0,20)+"..."
  
    return(
      <div className='cardContainer' onClick={()=>action(item, setviews)}>
        <Card>
          <Card.Img variant='top' className='cardImage' src={image} />
          <Card.Body className='cardBody'>
            <strong>{shortName}</strong>
            <div className='description'>
              {shortDescription}
            </div>
            <div className='viewsCounter'>
              <span>
                {views}
              </span>
              <AiOutlineEye/>
            </div>
          </Card.Body>
        </Card>
      </div>
    )
  
  }

  export default ProductCard