# Yüzeysel Kopyalama

## Görev 1

`cart` adında ürünlerden oluşan bir dizi ve `hatProduct` adında bir ürün objesi verildiğinde:

```javascript
const cart = [
  {
    type: "t-shirt",
    price: 19,
    color: "green",
  },
  {
    type: "jeans",
    price: 27,
    color: "blue",
  }
];

const hatProduct = {
  type: "hat",
  price: 15,
  color: "pink",
};
```

`addProduct` adında bir fonksiyon oluşturun; bu fonksiyon `cart` dizisini ve `hatProduct` ürününü parametre olarak alır.

Fonksiyon, yeni ürünü dizinin sonuna eklemeli ve güncellenmiş `cart` dizisini döndürmelidir.

Orijinal `cart` dizisinin değiştirilmediğinden emin olun. Yani, fonksiyon çağrıldıktan sonra `cart` hala sadece 2 ürün içermeli, ancak fonksiyon yeni 3 ürünlü bir dizi döndürmelidir.

## Görev 2

`tasks` adlı, çeşitli nesneler içeren bir dizi verildiğinde:

```javascript
const tasks = [
    {
        task: "clean apartment",
        priority: 5
    },
    {
        task: "learn objects",
        priority: 2
    },
    {
        task: "practice JavaScript",
        priority: 1
    }
]
```

`finishTask` adında bir fonksiyon oluşturun; bu fonksiyon:

- bir görev dizisini parametre olarak alır
- diziden son öğeyi kaldırır
- güncellenmiş diziyi döndürür

Orijinal `tasks` dizisi değiştirilmemelidir.

## Görev 3

`person` adlı bir nesne verildiğinde:

```javascript
const person = {
    firstName: "James",
    lastName: "Ensor",
    age: 13
}
```

`addFullName` adında bir fonksiyon oluşturun; bu fonksiyon bir nesneyi parametre olarak alır ve `fullName` adında yeni bir özellik ekler.

Fonksiyon, `firstName` ve `lastName` özelliklerini birleştirerek `fullName` değerini oluşturmalı ve değiştirilmiş nesneyi döndürmelidir. Orijinal `person` nesnesi değiştirilmemelidir.

## Görev 4

Aşağıdaki gibi ürün nesnelerinden oluşan bir dizi verildiğinde:

```js
const products = [
  {
    type: "t-shirt",
    price: 19,
    color: "green",
  },
  {
    type: "jeans",
    price: 27,
    color: "blue",
  },
  {
    type: "shirt",
    price: 32,
    color: "white",
  },
  ...
 ];
```

`applyDiscount` adında bir fonksiyon oluşturun; bu fonksiyon bir ürün nesneleri dizisini ve bir indirim değerini parametre olarak alır.

Fonksiyon, dizideki tüm ürünlere indirimi uygulamalı ve indirimli fiyatlarla birlikte güncellenmiş diziyi döndürmelidir.

**ÖNEMLİ**: Orijinal dizi değiştirilmemelidir.

İndirim hesaplama formülü:

```plaintext
indirimliFiyat = fiyat - (fiyat * indirim / 100);

100€’luk ürün için %20 indirim:
100 - (100 * 20 / 100) -> 100 - (200 / 100) -> 100 - 20 -> 80


70€’luk ürün için %15 indirim:
70 - (70 * 15 / 100) -> 70 - (1050 / 100) -> 70 - 10.5 -> 59.5 
```