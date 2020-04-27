'use strict'

const db = require('../server/db')
const {User} = require('../server/db/models')
const {Product} = require('../server/db/models')
const {Order} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({
      firstName: 'Cody',
      lastName: 'Smith',
      email: 'cody@email.com',
      password: '123',
      isAdmin: true
    }),
    User.create({
      firstName: 'Irma',
      lastName: 'Mendoza',
      email: 'irma@email.com',
      password: '123',
      isAdmin: true
    }),
    User.create({
      firstName: 'Artemio',
      lastName: 'Paradela',
      email: 'arty@email.com',
      password: '123',
      isAdmin: true
    }),
    User.create({
      firstName: 'Nai',
      lastName: 'Palm',
      email: 'nana@email.com',
      password: '123',
      isAdmin: true
    }),
    User.create({
      firstName: 'Murphy',
      lastName: 'Murphs',
      email: 'murphy@email.com',
      password: '123'
    }),
    User.create({
      firstName: 'Eldede',
      lastName: 'Mendoza',
      email: 'eldede@email.com',
      password: '123'
    }),
    User.create({
      firstName: 'Mickey',
      lastName: 'Mercedes',
      email: 'mickey@email.com',
      password: '123'
    }),
    User.create({
      firstName: 'Beboy',
      lastName: 'Victoriano',
      email: 'beboy@email.com',
      password: '123'
    })
  ])

  const products = await Promise.all([
    Product.create({
      name: 'Fuchsia Orchid',
      description:
        'Often called the beginner orchid or ‘moth orchid’, the popular pet-friendly Phalaenopsis orchid is one of the easiest varieties of orchids to grow as a houseplant. Indoors, it will typically bloom about once a year, for up to three months. After a blooming cycle, the flowers will wilt and fall off. This is the orchid’s way to store up energy to re-bloom again next season. Total height including planter measures around 18" tall.',
      imageUrl:
        'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_fushia-orchid_variant_small_prospect_mint_720x.jpg?v=1583956804',
      price: 65,
      lightRequirement: 'Bright Light'
    }),

    Product.create({
      name: 'Pink Anthurium',
      description:
        'Anthuriums are the world’s longest blooming houseplant – they are rarely without their showy blooms! Each bloom can last up to eight weeks, and new ones will pop up often. These aren’t actual flowers, but modified waxy leaves. Anthuriums flourish and bloom best in bright indirect light.',
      imageUrl:
        'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_anthurium-pink_variant_small_dolores_blush_720x.jpg?v=1584808786',
      price: 65,
      lightRequirement: 'Bright Light'
    }),

    Product.create({
      name: 'Petite White Orchid',
      description:
        'Often called the beginner orchid or ‘moth orchid’, the popular pet-friendly Phalaenopsis orchid is one of the easiest varieties of orchids to grow as a houseplant. Indoors, it will typically bloom about once a year, for up to three months. After a blooming cycle, the flowers will wilt and fall off. This is the Orchid’s way to store up energy to re-bloom again next season. Total height including planter measures around 14" tall.',
      imageUrl:
        'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_petite-white-orchid_variant_x-small_hyde_mint_720x.jpg?v=1583788421',
      price: 75,
      lightRequirement: 'Bright Light'
    }),

    Product.create({
      name: 'Petite Sunset Orchid',
      description:
        "Often called the beginner orchid or ‘moth orchid’, the popular pet-friendly Phalaenopsis orchid is one of the easiest varieties of orchids to grow as a houseplant. Indoors, it will typically bloom about once a year, for up to three months. After a blooming cycle, the flowers will wilt and fall off. This is the Orchid's way to store up energy to re-bloom again next season.Total height including planter measures around 14 inch tall.",
      imageUrl:
        'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_petite-sunset-orchid_variant_x-small_dolores_mustard_720x.jpg?v=1584138542',
      price: 75,
      lightRequirement: 'Bright Light'
    }),

    Product.create({
      name: 'Hoya Heart Plant',
      description:
        'This Hoya kerrii cutting is commonly referred to as the Hoya Heart because of its heart-shaped leaf. The leaf is partially rooted.',
      imageUrl:
        'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_hoya-heart_variant_mini_hyde_blush_bec6e62d-a54a-46e9-84fd-b0df8c98d53d_720x.jpg?v=1584647952',
      price: 28,
      lightRequirement: 'Bright Light'
    }),

    Product.create({
      name: 'Peperomia Obtusfolia',
      description:
        'The Peperomia Obtusfolia, or baby rubber plant, is characterized by its thick spoon-shaped green leaves.',
      imageUrl:
        'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_peperomia-obtusfolia-green_variant_small_grant_black_72353c54-6669-40d7-be32-8a9dd009e984_720x.jpg?v=1586554163',
      price: 32,
      lightRequirement: 'Low Light'
    }),
    Product.create({
      name: 'Bird’s Nest Fern',
      description:
        'If you’re looking for the perfect tropical houseplant, look no further than the Bird’s Nest Fern. Known for its wavy ripple-edge fronds that grow out of a central rosette, this plant will add vibrant pop of green to any space. We love it because it’s considered non-toxic, making it safe to keep around your furry friends.',
      imageUrl:
        'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_birds-nest-fern_variant_medium_prospect_blush_720x.jpg?v=1586542608',
      price: 39,
      lightRequirement: 'Low Light'
    }),
    Product.create({
      name: 'ZZ Plant',
      description:
        'The ZZ Plant is characterized by its thick waxy green leaves. It is a great air purifying plant for beginners.',
      imageUrl:
        'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_zz-plant_variant_medium_hyde_terracotta_720x.jpg?v=1586542717',
      price: 51,
      lightRequirement: 'Low Light'
    }),
    Product.create({
      name: 'Maranta',
      description:
        'Nicknamed the “prayer plant”, the Maranta is famous for the unique movements of its dramatic foliage.',
      imageUrl:
        'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_maranta_variant_small_hyde_blush_720x.jpg?v=1583180091',
      price: 32,
      lightRequirement: 'Low Light'
    }),
    Product.create({
      name: 'Calathea Rattlesnake',
      description:
        'The Calathea Rattlesnake has long wavy green leaves with a pattern of deep green brushstrokes on top, resembling reptile skin, and a deep purple underside.',
      imageUrl:
        'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_calathea-rattlesnake_variant_medium_grant_blush_9477ce86-c7a8-484e-8767-f2e56494948b_720x.jpg?v=1586903485',
      price: 58,
      lightRequirement: 'Low Light'
    })
  ])

  // const orderHistroy = await Promise.all([
  //   Order.create({
  //     orderDate: '2016-08-09 04:05:02'
  //   }),
  //   Order.create({
  //     orderDate: '2020-04-21 16:03:05'
  //   })
  // ])

  const orders = await Promise.all([
    Order.create({
      orderDate: '2016-08-09 04:05:02',
      orderStatus: 'pending',
      userId: 1
    }),
    Order.create({
      orderDate: '2016-08-09 04:05:02',
      orderStatus: 'pending',
      userId: 2
    }),
    Order.create({
      orderDate: '2016-08-09 04:05:02',
      orderStatus: 'pending',
      userId: 3
    }),
    Order.create({
      orderDate: '2016-08-09 04:05:02',
      orderStatus: 'pending',
      userId: 4
    }),
    Order.create({
      orderDate: '2016-08-09 04:05:02',
      orderStatus: 'pending',
      userId: 5
    }),
    Order.create({
      orderDate: '2020-04-21 16:03:05',
      orderStatus: 'complete',
      userId: 2
    }),
    Order.create({
      orderDate: '2020-04-21 16:03:05',
      orderStatus: 'complete',
      userId: 6
    }),
    Order.create({
      orderDate: '2020-04-21 16:03:05',
      orderStatus: 'complete',
      userId: 5
    }),
    Order.create({
      orderDate: '2020-04-21 16:03:05',
      orderStatus: 'complete',
      userId: 3
    }),
    Order.create({
      orderDate: '2020-04-21 16:03:05',
      orderStatus: 'complete',
      userId: 1
    }),
    Order.create({
      orderDate: '2020-04-21 16:03:05',
      orderStatus: 'complete',
      userId: 1
    }),
    Order.create({
      orderDate: '2020-04-21 16:03:05',
      orderStatus: 'complete',
      userId: 2
    })
  ])

  console.log(`seeded ${users.length} users`)
  console.log(`seeded ${products.length} products`)
  console.log(`seeded ${orders.length} orders`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
