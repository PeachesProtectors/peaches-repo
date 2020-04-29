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
    }),

    Product.create({
      name: 'Marimo ‘Moss’ Ball',
      description:
        'The marimo “moss” ball as it’s commonly known, is not actually moss at all, but a freshwater, filamentous green algal colony! First discovered in Lake Zell in Austria in the 1820s, the aquatic plant was later nicknamed “marimo” by Japanese botanist Takiya Kawakami in 1898. *Does not come with glass bowl.',
      imageUrl:
        'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_marimo-moss-ball_gallery_all_01_1440x.jpg?v=1586545067',
      price: 5,
      lightRequirement: 'Low Light'
    }),

    Product.create({
      name: 'Echeveria Preta',
      description:
        'The Echeveria is known for its iconic rosette-shape, succulent nature, and pet-friendliness. Its fleshy water-storing leaves means it can survive on little more than sunshine. This variety is a dark purple black hue. It comes potted in your choice of earthenware planter.',
      imageUrl:
        'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_echeveria-black_variant_small_balboa_black_1440x.jpg?v=1584388943',
      price: 55,
      lightRequirement: 'Bright Light'
    }),

    Product.create({
      name: 'Monstera Deliciosa',
      description:
        'Nicknamed the “swiss cheese plant”, the Monstera deliciosa is famous for its quirky natural leaf holes. A vibrant green beauty, it can give any interior space instant jungle vibes.',
      imageUrl:
        'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_monstera-deliciosa_variant_medium_hyde_mint_1440x.jpg?v=1583161003',
      price: 62,
      lightRequirement: 'Bright Light'
    }),

    Product.create({
      name: 'The Sunny Sill Set',
      description:
        "New to Plant Parenthood? This duo potted in our Hyde planters makes it easy to get started - it's perfect for a sunny sill, and hard to kill. Both the succulents, our Haworthia and Echeveria, thrive in bright light and can survive weeks without water, thanks to the drought-tolerant traits they’ve developed over time. Simply set ‘em on your sill and enjoy until you see a leaf wrinkle or two (a sign of thirst!) Tip: we add a layer of lava rocks before the potting mix to create drainage.",
      imageUrl:
        'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_the-sunny-sill-set_variant_blush_1440x.jpg?v=1587133609',
      price: 30,
      lightRequirement: 'Bright Light'
    }),

    Product.create({
      name: 'Haworthia Zebra',
      description:
        "This quirky, compact succulent is marked by ridges with bright white stripes like a zebra. The drought tolerant Haworthia survives on little more than sunshine, and the occasional watering. Added bonus – it's pet-safe.",
      imageUrl:
        'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_haworthia-zebra_variant_mini_ezra_sonora_1440x.jpg?v=1583178308',
      price: 27,
      lightRequirement: 'Bright Light'
    }),

    Product.create({
      name: 'Parlor Palm',
      description:
        'The Parlor Palm is a favorite easy-care palm with tropical fronds known for its air purifying qualities.',
      imageUrl:
        'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_parlor-palm_variant_small_grant_terracotta_1440x.jpg?v=1583177865',
      price: 31,
      lightRequirement: 'Bright Light'
    }),

    Product.create({
      name: 'Flapjack Succulent Duo',
      description:
        'Our Flapjack succulent duo includes a Kalanchoe Flapjack, also called the paddle plant, and Sempervivum Red Beauty potted in our earthenware planters. They come potted in our potting mix to increase plant health, longevity, and growth. These drought-tolerant plants love sunshine.',
      imageUrl:
        'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_kalanchoe-flapjack-succulent-duo_variant_x-small_grant_mint_1440x.jpg?v=1585147313',
      price: 45,
      lightRequirement: 'Bright Light'
    }),

    Product.create({
      name: 'Pilea Peperomioides',
      description:
        'The Pilea peperomioides, also called the pancake or UFO plant, is known for its cute coin-shaped leaves. A self-propagator, the Pilea produces sweet little babies or “pups” on it’s own, which pop up from the soil surrounding the mother plant.',
      imageUrl:
        'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_pilea_variant_x-small_grant_mint_bddcc4c7-3aaf-453b-bd55-e5b4aee5a089_1440x.jpg?v=1586980304',
      price: 29,
      lightRequirement: 'Bright Light'
    }),

    Product.create({
      name: 'Money Tree Plant',
      description:
        'The Money Tree is a popular houseplant because of its resilience, ease of growth, and fun braided trunk.',
      imageUrl:
        'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_money-tree_variant_small_grant_black_1440x.jpg?v=1583177241',
      price: 45,
      lightRequirement: 'Bright Light'
    }),

    Product.create({
      name: 'Six Assorted Air Plants',
      description:
        'Our set of six assorted Air Plants thrive without potting soil. Assortment includes a variety of six tillandsia, ranging 2 inches to 4 inches in size. They prefer bright, indirect light and weekly soakings. Air Plants are pet-friendly!',
      imageUrl:
        '//cdn.shopify.com/s/files/1/0150/6262/products/the-sill_airplants-assorted_6_768x.jpg?v=1585928827',
      price: 30,
      lightRequirement: 'Bright Light'
    }),

    Product.create({
      name: 'Xerographica Air Plant',
      description:
        'Our set of six assorted Air Plants thrive without potting soil. Assortment includes a variety of six tillandsia, ranging 2 inches to 4 inches in size. They prefer bright, indirect light and weekly soakings. Air Plants are pet-friendly!',
      imageUrl:
        '//cdn.shopify.com/s/files/1/0150/6262/products/the-sill_airplants-assorted_6_768x.jpg?v=1585928827',
      price: 30,
      lightRequirement: 'Bright Light'
    })
  ])

  // const orders = await Promise.all([
  // ])

  console.log(`seeded ${users.length} users`)
  console.log(`seeded ${products.length} products`)
  // console.log(`seeded ${orders.length} orders`)
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
