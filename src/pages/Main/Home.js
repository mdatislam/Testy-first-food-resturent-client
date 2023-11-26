import React, { useEffect } from "react";
import ProductCard from "../../components/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { actionCategory, actionClear, actionStock, } from "../../redux/actions/filterAction";
import loadFoodData from "../../redux/Thunk/fetchFoodData";

const Home = () => {
  /* const [products, setProducts] = useState([]); */
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadFoodData())
  }, []);

  const products = useSelector(state => state.product.products)
  const filters = useSelector(state => state.filter.filters)
  const searchKeyWord = useSelector(state => state.filter.keyWords)
  //console.log(searchKeyWord);
  const { category, stock } = filters
  //console.log(category,stock);
  const activeClass = "text-white  bg-indigo-500 border-white";


  let content

  if (products.length) {
    content = products.map((product) => (
      <ProductCard key={product._id} product={product} />
    ))

  }

  if (products.length && searchKeyWord) {
    content = products
      .filter((product) => {
        return product.name.includes(`${searchKeyWord}`)

      })
      .map((product) => (
        <ProductCard key={product._id} product={product} />
      ))

  }



  // for when stock property exist in data 
  // if(products.length && (stock || category.length)){
  //   content=products
  //   .filter((product)=>{
  //     if(stock){
  //       return product.status===true
  //     }
  //     else{
  //       return product
  //     }
  //   }
  //   )
  //   .filter((product)=>{
  //     if(category.length){
  //       return category.includes(product.category)
  //     }
  //     else{
  //       return product
  //     }
  //   })
  //   .map((product) => (
  //     <ProductCard key={product._id} product={product} />
  //   ))
  // }

  if ((products.length) && (category.length)) {
    content = products
      .filter(product => category.includes(product.category))
      .map((product) => (
        <ProductCard key={product._id} product={product} />
      ))
  }

  return (
    <div className='max-w-7xl gap-14 mx-auto my-10'>
      <div className='mb-10 flex justify-end gap-5'>
        <button
          onClick={() => dispatch(actionStock())}
          className={`border px-3 py-2 rounded-full font-semibold ${stock ? activeClass : null} `}
        >
          stock
        </button>
        <button
          onClick={() => dispatch(actionCategory('salad'))}
          className={`border px-3 py-2 rounded-full font-semibold ${(category.includes("salad")) ? activeClass : null} `}
        >
          salad
        </button>
        <button
          onClick={() => dispatch(actionCategory('dessert'))}
          className={`border px-3 py-2 rounded-full font-semibold ${(category.includes("dessert")) ? activeClass : null}`}>
          dessert
        </button>
        <button
          onClick={() => dispatch(actionCategory('drinks'))}
          className={`border px-3 py-2 rounded-full font-semibold ${(category.includes("drinks")) ? activeClass : null}`}>
          drinks
        </button>
        <button
          onClick={() => dispatch(actionClear())}
          className={`border px-3 py-2 rounded-full font-semibold ${(category.includes(" ")) ? activeClass : null}`}>
          All clear
        </button>
      </div>
      <div className="text-center font-bold text-violet-700 text-2xl my-4">
        <h2>Total Items:{products.length}</h2>
        <h2>Filter products:{content?.length}</h2>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14'>

        {content}
      </div>
    </div>
  );
};

export default Home;