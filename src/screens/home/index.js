import { useEffect, useState } from 'react';

import { Container, Modal, Row, Col, Button } from 'react-bootstrap';

import { getProducts } from '../../API';

import ProductCard from '../../components/productCarComponent';

import jQuery from 'jquery';

import './styles.scss';

import jsonObject from './data/home.json'

function HomeScreen() {

  useEffect(() => {
    getProducts().then(res=>{
      const list = res.data.results
      const apiProducts = list.slice(3,8)//get just first 5 elements
      setProducts([...apiProducts])
    })
  }, [])
  
  const [products, setProducts] = useState([])
  const [productToView, setProductToView] = useState(null)
  const [pageText, setPageText] = useState('')

  const shouldOpenModal = () =>{
    return productToView != null
  }

  const closeModal = () =>{
    setProductToView(null)
  }

  const openModal = (product, countUp)=>{
    countUp(old=>old+1)
    setProductToView(product)
  }
  

  const windowConfig = `toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=800,height=400`

  const openPopup = (product, countUp) => {
    const popup = window.open("http://localhost:3000/popup/", "image", windowConfig);
    popup.callbackAction = () => countUp(old=>old+1)
    popup.objectData = product
    popup.onblur = popup.close
  }

  const loadJSONFromFile = () => {
    const {pagina, texto} = jsonObject
    setPageText(texto)
  }

  const handlePageText = (e) => {
    setPageText(e.target.value)
  }

  return ( 
    <Container className='p-3 mainContainer'>
        <Row className='homeTitle'>
            Presentacion de productos
        </Row>
        <Row>
            <section>
                <p>
                    Los siguientes productos son traidos desde
                    <a target="blank" href='https://peticiones.online/products'> Peticiones online </a>
                    utilizando axios para la consulta get.
                </p>
                <p>
                  La respuesta de la Api de los productos
                  trae un array en json qué, posteriormete, 
                  a travez del metodo Array.map retornando el componente
                  CardProduct con sus respectivos datos
                </p>
            </section>
        </Row>
        <Row className='imagesContainer' sm={3} md={3} xl={5} >
          {products.map((product, index) => {

            const action = index%2 ? openModal : openPopup //set action if is even or odd
            
            return  <Col>
                      <ProductCard 
                        item={product}
                        action={action}
                      />
                    </Col>
                    
          })}
        </Row>
        <Row sm={12}>
        <div className='textAreaContainer'>
            <p>El siguiente texto es cargado mediante la importacion directa del elemento home.json</p>
            <textarea onChange={handlePageText} value={pageText}/>
            <Button variant='info' onClick={()=>loadJSONFromFile()}>
              Cargar texto
            </Button>
          </div>
        </Row>
        <Modal show={shouldOpenModal()} onHide={closeModal}>
          <Modal.Body>
            <img className='modalImage' src={productToView?.image} />
          </Modal.Body>
        </Modal>
    </Container>
  );
}

export default HomeScreen
