$(document).ready(function(){
    
    $('.out').html('Sold Out');
    
    //Toggle the editing mode - hide/show remove button. If there are items selected and user toggles edit mode, all classes are removed.
    var editing = false;
    $('#edit-cart').click(function(){
        if(!editing){
            editing = true;
            $(this).html('Editing Cart...');
            $('#remove-item').show();
        }
        else {
            editing = false;
            $(this).html('Edit Cart');
            $('#remove-item').hide();
            $('.cart-item').removeClass('remove');
        }
    });
    
    //Select class to be removed in editing mode
    $('body').on('click', '.cart-item', function(){
        if(editing){
            $(this).toggleClass('remove');
        }
    });
    
    //Remove selected items
    $('#remove-item').click(function(){
        $('.remove').remove();
    });
    
    //Function to add a product to the card
    function add(image, name, brand, price, id){
        $('#cart').append('<div id="' + id +'" class="cart-item"><img src="' + image + '" /><p class="item-name">' + name + '</p><p class="item-brand">' + brand + '</p><p class="item-price">' + price + '</p><p class="item-quantity">1</p></div>');
    }
    
    //Object for prodcuts
    function product(id, image, name, brand, price) {
        this.id = id;
        this.image = image;
        this.name = name;
        this.brand = brand;
        this.price = price;
        this.quantity = 1;
    }
    
    //Products
    var chair = new product('chair', 'assets/chair.png', 'Premium quality scandinavian wooden chair', 'Ikea', 350);
    var pan = new product('pan', 'assets/pan.png', 'Deluxe edition non-stick pan', 'GreenPan', 120);
    var mouse = new product('mouse', 'assets/mouse.png', 'Pro Gaming Mouse', 'Razer', 130);
    var silverware = new product('silverware', 'assets/cutlery.png', 'Silverware', 'Topelek', 50);
    var phone = new product('phone', 'assets/phone.png', 'Nokia Touchscreen Phone', 'Nokia', 539.99);
    
    
    function totalPrice(quantity, price) {
        return quantity * price;
    }
    
    //Create the new item and add it to the cart
    $('.product').click(function(){
        let productNum = $(this).attr('data-product');
        if($(this).children().hasClass('out')){ //Check if this item is sold out first, otherwise add it to the cart.
            return;
        } else {
            if(productNum == 1){
                if($('#'+chair.id).length == 0){
                    add(chair.image, chair.name, chair.brand, chair.price, chair.id);
                    chair.quantity = 1;
                } else {
                    chair.quantity++;
                    $('#'+chair.id).children('.item-price').html(totalPrice(chair.quantity, chair.price));
                    $('#'+chair.id).children('.item-quantity').html(chair.quantity);
                }
            } else if(productNum == 2){
                if($('#'+pan.id).length == 0){
                    add(pan.image, pan.name, pan.brand, pan.price, pan.id);
                    pan.quantity = 1;
                } else {
                    pan.quantity++;
                    $('#'+pan.id).children('.item-price').html(totalPrice(pan.quantity, pan.price));
                    $('#'+pan.id).children('.item-quantity').html(pan.quantity);
                }
            } else if(productNum == 3){
                if($('#'+mouse.id).length == 0){
                    add(mouse.image, mouse.name, mouse.brand, mouse.price, mouse.id);
                    mouse.quantity = 1;
                } else {
                    mouse.quantity++;
                    $('#'+mouse.id).children('.item-price').html(totalPrice(mouse.quantity, mouse.price));
                    $('#'+mouse.id).children('.item-quantity').html(mouse.quantity);
                }
            } else if(productNum == 4){
                if($('#'+silverware.id).length == 0){
                    add(silverware.image, silverware.name, silverware.brand, silverware.price, silverware.id);
                    silverware.quantity = 1;
                } else {
                    silverware.quantity++;
                    $('#'+silverware.id).children('.item-price').html(totalPrice(silverware.quantity, silverware.price));
                    $('#'+silverware.id).children('.item-quantity').html(silverware.quantity);
                }
            } else if(productNum == 5){
                if($('#'+phone.id).length == 0){
                    add(phone.image, phone.name, phone.brand, phone.price, phone.id);
                    phone.quantity = 1;
                } else {
                    phone.quantity++;
                    $('#'+phone.id).children('.item-price').html(totalPrice(phone.quantity, phone.price));
                    $('#'+phone.id).children('.item-quantity').html(phone.quantity);
                }
            }
        }
        
    });
});