import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { getItemDetails } from '../services';
import Breadcrumb from './common/Breadcrumb';
import ItemDescription from './partials/ItemDescription';
import Loader from './common/Loader';
import NotFoundMessage from './common/NotFoundMessage';

function ItemDetails() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [dataIsEmpty, setDataIsEmpty] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const notFoundMessage = 'Lo sentimos, no se encontró información del producto.';

  useEffect(() => {
    setIsLoading(true);
    getItemDetails(id).then(response => {
      setData(response);
      setDataIsEmpty(false);
      setIsLoading(false);
    })
    .catch(error =>{
      setDataIsEmpty(true);
      console.log(error);
    });
  }, [id]);

  const itemData =  data.length !== 0 &&
    <ItemDescription 
      id={id}
      key={id}
      title={data.item.title}
      price={data.item.price}
      picture={data.item.picture}
      condition={data.item.condition}
      shipping={data.item.free_shipping}
      sold={data.item.sold_quantity}
      description={data.item.description}
    />

  return (
    dataIsEmpty ? <NotFoundMessage message={notFoundMessage} /> :
    <div className="container">
      <Breadcrumb categories={data.categories} /> 
      <section className="main description">
        {isLoading ? <Loader /> : itemData}
      </section>
    </div>
  );
}

export default ItemDetails;
