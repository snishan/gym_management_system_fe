export const Urls={
    logIn:'/kaaya-api/v1/login',
    register:'/kaaya-api/v1/signup',
    create_product:'/kaaya-api/v1/products',
    get_products:'/kaaya-api/v1/products',
    update_products:'/kaaya-api/v1/products/',
    add_to_cart(userId,productId){
        return `/kaaya-api/v1/carts/users/${userId}/products/${productId}`
    },
    get_cart_item_by_user(userId){
        return `/kaaya-api/v1/carts/users/${userId}`
    },
    update_cart(cartId,productId){
        return `/kaaya-api/v1/carts/${cartId}/products/${productId}`
    },
    delete_cart(cartId){
        return `/kaaya-api/v1/carts/${cartId}`
    },
    create_appointment:'/kaaya-api/v1/appointments',
    create_leave:'/kaaya-api/v1/leave',
    get_all_leaves:'/kaaya-api/v1/leave',
    update_leave(id){
        return `/kaaya-api/v1/leave/${id}`
    },
    get_all_users:'/kaaya-api/v1/users',
    update_user(id){
        return `/kaaya-api/v1/users/${id}`
    },
    update_appointment(id){
        return `/kaaya-api/v1/appointments/${id}`
    }


}
