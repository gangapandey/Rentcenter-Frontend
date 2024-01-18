export function fetchAllProducts(){
    return new Promise(async(resolve)=>{
        //todo
        const response = await fetch("http://localhost:3000/products")
        const data = await response.json()
        resolve({data})
    })
}

//single productdetail
export function fetchProductByID(id){
    return new Promise(async(resolve)=>{
        //todo
        const response = await fetch(`http://localhost:3000/products/${id}`)
        const data = await response.json()
        resolve({data})
    })
}


export function fetchProductsByFilters(filter, sort){
    //filter = {"category" : "smartphones", "Laptops"}
    // sort ={_sort: "price", _order="desc"}
    //TODO: on server support multiple category
    let queryString = '';
    for( let key in filter){
        const categoryValues = filter[key];
    
        if(categoryValues.length){
        // //     const lastCategoryValues = categoryValues[categoryValues.length-1]
        // // queryString += `${key}=${lastCategoryValues}&`
        const lastCategoryValues = categoryValues[categoryValues.length-1]
        queryString += `${key}=${lastCategoryValues}&`
        } 
    }
    for(let key in sort){
        queryString += `${key}=${sort[key]}&`
    }

    return new Promise(async(resolve)=>{
        //todo
        const response = await fetch("http://localhost:3000/products?"+queryString)
        const data = await response.json()
        resolve({data})
    })
}

export function fetchCategories(){
    return new Promise(async(resolve)=>{
        const response = await fetch("http://localhost:3000/categories")
        const data = await response.json()
        resolve({data})
    })
}

export function fetchBrands(){
    return new Promise(async(resolve)=>{
        const response = await fetch(" http://localhost:3000/brands")
        const data = await response.json()
        resolve({data})
    })
}

