var VueAppConfiguration = {
    data() {
        return {
            itemsImagesRoot: 'images/',
            totalPriceOfSelectedItems: 0,
            currency: '$',
            ownerWhatsappNumber: '',
            items: [
                { label: 'A Storytelling Workbook for Beginners', price: 100, imgSrc: 'astorytellingworkbookforbeginners.jpg', details: 'You do not just have one story to tell. You have endless stories inside of you, just waiting to be told. The goal of the Storytelling Workbook for Beginners is to help you work your storytelling muscles on a daily or weekly basis, so you can be able to spot storytelling opportunities at any given time and know which story will be the most effective to use. By setting up a simple story structure for you to understand and follow, as well as a routine practice of working that storytelling muscle, you can create up to 100 stories with this one workbook. And soon, you will be well on your way to becoming a compelling storyteller!' },
                { label: 'How to Stop Worrying and Start Living', price: 200, imgSrc: 'howtostopworryingandstartliving.jpg', details: 'How to Stop Worrying and Start Living deals with fundamental emotions and ideas. It is fascinating to read and easy to apply. Let it change and improve you. There’s no need to live with worry and anxiety that keep you from enjoying a full, active and happy life!' },
                { label: 'Milk and honey', price: 300, imgSrc: 'milkandhoney.jpg', details: 'Milk and Honey is a collection of poetry and prose by Rupi Kaur. The collection is about survival. It is divided into sections, with each section serving a different purpose and relevance to Kaur’s experience. The sections explore the themes of violence, abuse, love, loss, and femininity.' },
                { label: 'The Psychology of Money', price: 400, imgSrc: 'thepsychologyofmoney.jpg', details: 'Timeless lessons on wealth, greed, and happiness doing well with money isn’t necessarily about what you know. It’s about how you behave. And behavior is hard to teach, even to really smart people. How to manage money, invest it, and make business decisions are typically considered to involve a lot of mathematical calculations, where data and formulae tell us exactly what to do. But in the real world, people don’t make financial decisions on a spreadsheet. They make them at the dinner table, or in a meeting room, where personal history, your unique view of the world, ego, pride, marketing, and odd incentives are scrambled together. In the psychology of money, the author shares 19 short stories exploring the strange ways people think about money and teaches you how to make better sense of one of life’s most important matters.' },
                { label: 'The Subtle Art of Not Giving a F*ck', price: 500, imgSrc: 'thesubtleartofnotgivingfuck.jpg', details: 'The Subtle Art of Not Giving a Fuck: A Counterintuitive Approach to Living a Good Life is the second book by blogger and author Mark Manson. In it Manson argues that life\'s struggles give it meaning, and that the mindless positivity of typical self-help books is neither practical nor helpful.' },
                { label: 'Your Soul Is a River', price: 600, imgSrc: 'yoursoulisariver.jpg', details: 'This is a book about the journey of healing from trauma and becoming whole again. Directions: apply to your soul gently, whilst sitting under the stars.' },
            ]
        };
    },
    created() {
        var i;
        var item;
        for (i = 0; i < this.items.length; i++) {
            item = this.items[i];
            item.isSelected = false;
            item.isDetailsVisible = false;
            item.orderQty = 1;
            item.imgSrc = this.itemsImagesRoot + item.imgSrc;
            item.label += ' - ' + this.currency + item.price;
        }
    },
    beforeUpdate() {
        var i;
        var item;
        this.totalPriceOfSelectedItems = 0;
        for (i = 0; i < this.items.length; i++) {
            item = this.items[i];
            if (item.isSelected === true) {
                this.totalPriceOfSelectedItems += item.price * item.orderQty;
            }
        }
    },
    methods: {
        addItemToOrder(item) {
            item.isSelected = true;
        },
        removeItemFromOrder(item) {
            item.isSelected = false;
        },
        increaseItemQty(item) {
            if (item.orderQty !== 50) {
                item.orderQty++;
            }
        },
        decreaseItemQty(item) {
            if (item.orderQty !== 1) {
                item.orderQty--;
            }
        },
        showItemDetails(item) {
            item.isDetailsVisible = true;
        },
        hideItemDetails(item) {
            item.isDetailsVisible = false;
        },
        sendOrder() {
            var i;
            var item;
            var orderText = 'Order: \n';
            for (i = 0; i < this.items.length; i++) {
                item = this.items[i];
                if (item.isSelected === true) {
                    orderText += item.label + ' x ' + item.orderQty + '\n';
                }

            }

            if (orderText === 'Order: \n') { return undefined; }

            orderText += 'Total: ' + this.currency + this.totalPriceOfSelectedItems;
            orderText = encodeRFC5987ValueChars(orderText);

            window.open('https://wa.me/' + this.ownerWhatsappNumber + '?text=' + orderText, '_blank');
        }
    }
}

var app = Vue.createApp(VueAppConfiguration);

var vm = app.mount('#app');

function encodeRFC5987ValueChars(str) {
    return (encodeURIComponent(str).replace(/['()*]/g, c => "%" + c.charCodeAt(0).toString(16)).replace(/%(7C|60|5E)/g, (str, hex) => String.fromCharCode(parseInt(hex, 16))));
}