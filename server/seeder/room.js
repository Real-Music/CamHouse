const uniqueString = require("unique-string");
const { singleRoom, User } = require("../api/models");

let rooms = [
  {
    slug: uniqueString(),
    imageUrl1:
      "/singleRooms/2019-06-13T06:03:27.835Zchristopher-jolly-616571-unsplash.jpg",
    imageUrl2:
      "/singleRooms/2019-06-13T06:03:27.844Zaaina-sharma-323673-unsplash.jpg",
    imageUrl3:
      "/singleRooms/2019-06-13T06:03:27.846Zandre-francois-mckenzie-1232474-unsplash.jpg",
    bathroom_no: 519,
    kitchen_no: 792,
    description:
      "illum enim autem voluptatem\nfugiat eum voluptas quasi velit labore\nquo quasi nesciunt",
    price: 996,
    // rooms_no: 357,
    location: "Montana",
    dimension: 832
    // palors_no: 907
  },
  {
    slug: uniqueString(),
    imageUrl1:
      "/singleRooms/2019-06-13T06:03:27.835Zchristopher-jolly-616571-unsplash.jpg",
    imageUrl2:
      "/singleRooms/2019-06-13T06:03:27.844Zaaina-sharma-323673-unsplash.jpg",
    imageUrl3:
      "/singleRooms/2019-06-13T06:03:27.846Zandre-francois-mckenzie-1232474-unsplash.jpg",
    bathroom_no: 608,
    kitchen_no: 896,
    description:
      "voluptatem rerum atque dolorem in quia id consectetur\nquis culpa incidunt laborum\nrepudiandae aut molestiae ea assumenda fugit",
    price: 999,
    // rooms_no: 506,
    location: "Hawaii",
    dimension: 918
    // palors_no: 446
  },
  {
    slug: uniqueString(),
    imageUrl1:
      "/singleRooms/2019-06-13T06:03:27.835Zchristopher-jolly-616571-unsplash.jpg",
    imageUrl2:
      "/singleRooms/2019-06-13T06:03:27.844Zaaina-sharma-323673-unsplash.jpg",
    imageUrl3:
      "/singleRooms/2019-06-13T06:03:27.846Zandre-francois-mckenzie-1232474-unsplash.jpg",
    bathroom_no: 919,
    kitchen_no: 831,
    description:
      "quas eos quae voluptatibus non esse\nnon in veniam dignissimos facere quam atque\ndoloribus explicabo ut",
    price: 154,
    // rooms_no: 942,
    location: "Alabama",
    dimension: 711
    // palors_no: 799
  },
  {
    slug: uniqueString(),
    imageUrl1:
      "/singleRooms/2019-06-13T06:03:27.835Zchristopher-jolly-616571-unsplash.jpg",
    imageUrl2:
      "/singleRooms/2019-06-13T06:03:27.844Zaaina-sharma-323673-unsplash.jpg",
    imageUrl3:
      "/singleRooms/2019-06-13T06:03:27.846Zandre-francois-mckenzie-1232474-unsplash.jpg",
    bathroom_no: 721,
    kitchen_no: 241,
    description:
      "doloribus occaecati laborum\nvoluptate atque in est repudiandae\nconsequatur optio inventore qui eos",
    price: 798,
    // rooms_no: 541,
    location: "Mississippi",
    dimension: 355
    // palors_no: 342
  },
  {
    slug: uniqueString(),
    imageUrl1:
      "/singleRooms/2019-06-13T06:03:27.835Zchristopher-jolly-616571-unsplash.jpg",
    imageUrl2:
      "/singleRooms/2019-06-13T06:03:27.844Zaaina-sharma-323673-unsplash.jpg",
    imageUrl3:
      "/singleRooms/2019-06-13T06:03:27.846Zandre-francois-mckenzie-1232474-unsplash.jpg",
    bathroom_no: 822,
    kitchen_no: 33,
    description:
      "vero rerum explicabo id deleniti\nquia quam qui\nitaque ut reprehenderit architecto quasi",
    price: 39,
    // rooms_no: 895,
    location: "Michigan",
    dimension: 514
    // palors_no: 98
  },
  {
    slug: uniqueString(),
    imageUrl1:
      "/singleRooms/2019-06-13T06:03:27.835Zchristopher-jolly-616571-unsplash.jpg",
    imageUrl2:
      "/singleRooms/2019-06-13T06:03:27.844Zaaina-sharma-323673-unsplash.jpg",
    imageUrl3:
      "/singleRooms/2019-06-13T06:03:27.846Zandre-francois-mckenzie-1232474-unsplash.jpg",
    bathroom_no: 229,
    kitchen_no: 775,
    description:
      "sunt dolores perspiciatis\nut ut facilis et magni qui\natque et corrupti",
    price: 228,
    // rooms_no: 916,
    location: "Connecticut",
    dimension: 127
    // palors_no: 121
  },
  {
    slug: uniqueString(),
    imageUrl1:
      "/singleRooms/2019-06-13T06:03:27.835Zchristopher-jolly-616571-unsplash.jpg",
    imageUrl2:
      "/singleRooms/2019-06-13T06:03:27.844Zaaina-sharma-323673-unsplash.jpg",
    imageUrl3:
      "/singleRooms/2019-06-13T06:03:27.846Zandre-francois-mckenzie-1232474-unsplash.jpg",
    bathroom_no: 993,
    kitchen_no: 779,
    description:
      "quam quo quis optio illum dolore laborum\nsequi explicabo amet a fugit dolores accusantium\nporro quas qui deleniti et",
    price: 552,
    // rooms_no: 901,
    location: "Rhode Island",
    dimension: 109
    // palors_no: 407
  },
  {
    slug: uniqueString(),
    imageUrl1:
      "/singleRooms/2019-06-13T06:03:27.835Zchristopher-jolly-616571-unsplash.jpg",
    imageUrl2:
      "/singleRooms/2019-06-13T06:03:27.844Zaaina-sharma-323673-unsplash.jpg",
    imageUrl3:
      "/singleRooms/2019-06-13T06:03:27.846Zandre-francois-mckenzie-1232474-unsplash.jpg",
    bathroom_no: 623,
    kitchen_no: 905,
    description:
      "eius fugit voluptatem neque aut nemo eos\noptio veritatis labore laudantium voluptatem\nenim itaque tempora",
    price: 808,
    // rooms_no: 634,
    location: "Arkansas",
    dimension: 771
    // palors_no: 852
  },
  {
    slug: uniqueString(),
    imageUrl1:
      "/singleRooms/2019-06-13T06:03:27.835Zchristopher-jolly-616571-unsplash.jpg",
    imageUrl2:
      "/singleRooms/2019-06-13T06:03:27.844Zaaina-sharma-323673-unsplash.jpg",
    imageUrl3:
      "/singleRooms/2019-06-13T06:03:27.846Zandre-francois-mckenzie-1232474-unsplash.jpg",
    bathroom_no: 622,
    kitchen_no: 496,
    description:
      "modi velit voluptas quae\net rerum enim voluptatem consequuntur mollitia\nvel ut qui distinctio aliquid et facere et",
    price: 560,
    // rooms_no: 4,
    location: "New Mexico",
    dimension: 811
    // palors_no: 913
  },
  {
    slug: uniqueString(),
    imageUrl1:
      "/singleRooms/2019-06-13T06:03:27.835Zchristopher-jolly-616571-unsplash.jpg",
    imageUrl2:
      "/singleRooms/2019-06-13T06:03:27.844Zaaina-sharma-323673-unsplash.jpg",
    imageUrl3:
      "/singleRooms/2019-06-13T06:03:27.846Zandre-francois-mckenzie-1232474-unsplash.jpg",
    bathroom_no: 159,
    kitchen_no: 811,
    description:
      "inventore repudiandae soluta autem optio sint\na ut quibusdam quod autem consequuntur velit\ndeleniti amet aut et optio",
    price: 830,
    // rooms_no: 44,
    location: "New Jersey",
    dimension: 324
    // palors_no: 733
  },
  {
    slug: uniqueString(),
    imageUrl1:
      "/singleRooms/2019-06-13T06:03:27.835Zchristopher-jolly-616571-unsplash.jpg",
    imageUrl2:
      "/singleRooms/2019-06-13T06:03:27.844Zaaina-sharma-323673-unsplash.jpg",
    imageUrl3:
      "/singleRooms/2019-06-13T06:03:27.846Zandre-francois-mckenzie-1232474-unsplash.jpg",
    bathroom_no: 832,
    kitchen_no: 147,
    description:
      "ducimus voluptatem asperiores\nquia quidem minima nesciunt consequatur voluptatem blanditiis modi aut\nnecessitatibus eum aspernatur atque assumenda",
    price: 871,
    // rooms_no: 861,
    location: "New Jersey",
    dimension: 362
    // palors_no: 907
  },
  {
    slug: uniqueString(),
    imageUrl1:
      "/singleRooms/2019-06-13T06:03:27.835Zchristopher-jolly-616571-unsplash.jpg",
    imageUrl2:
      "/singleRooms/2019-06-13T06:03:27.844Zaaina-sharma-323673-unsplash.jpg",
    imageUrl3:
      "/singleRooms/2019-06-13T06:03:27.846Zandre-francois-mckenzie-1232474-unsplash.jpg",
    bathroom_no: 435,
    kitchen_no: 960,
    description:
      "ipsam fugiat dolorum aut minus qui adipisci unde\nvero soluta sed ea et dolor vitae\nquia et id",
    price: 823,
    // rooms_no: 633,
    location: "Illinois",
    dimension: 566
    // palors_no: 371
  },
  {
    slug: uniqueString(),
    imageUrl1:
      "/singleRooms/2019-06-13T06:03:27.835Zchristopher-jolly-616571-unsplash.jpg",
    imageUrl2:
      "/singleRooms/2019-06-13T06:03:27.844Zaaina-sharma-323673-unsplash.jpg",
    imageUrl3:
      "/singleRooms/2019-06-13T06:03:27.846Zandre-francois-mckenzie-1232474-unsplash.jpg",
    bathroom_no: 2,
    kitchen_no: 679,
    description:
      "illum fugit recusandae\nqui labore dignissimos autem\nfacere ex quos numquam",
    price: 361,
    // rooms_no: 290,
    location: "South Carolina",
    dimension: 139
    // palors_no: 778
  },
  {
    slug: uniqueString(),
    imageUrl1:
      "/singleRooms/2019-06-13T06:03:27.835Zchristopher-jolly-616571-unsplash.jpg",
    imageUrl2:
      "/singleRooms/2019-06-13T06:03:27.844Zaaina-sharma-323673-unsplash.jpg",
    imageUrl3:
      "/singleRooms/2019-06-13T06:03:27.846Zandre-francois-mckenzie-1232474-unsplash.jpg",
    bathroom_no: 583,
    kitchen_no: 210,
    description:
      "ad nihil amet iusto suscipit\naccusantium voluptatem sint enim dolorem libero odio earum\ndolorem minus eligendi corporis",
    price: 788,
    // rooms_no: 260,
    location: "Michigan",
    dimension: 987
    // palors_no: 823
  },
  {
    slug: uniqueString(),
    imageUrl1:
      "/singleRooms/2019-06-13T06:03:27.835Zchristopher-jolly-616571-unsplash.jpg",
    imageUrl2:
      "/singleRooms/2019-06-13T06:03:27.844Zaaina-sharma-323673-unsplash.jpg",
    imageUrl3:
      "/singleRooms/2019-06-13T06:03:27.846Zandre-francois-mckenzie-1232474-unsplash.jpg",
    bathroom_no: 108,
    kitchen_no: 596,
    description:
      "voluptatem et eum est sed\nnihil est ut aut\net ipsum et non et",
    price: 504,
    // rooms_no: 172,
    location: "California",
    dimension: 803
    // palors_no: 558
  },
  {
    slug: uniqueString(),
    imageUrl1:
      "/singleRooms/2019-06-13T06:03:27.835Zchristopher-jolly-616571-unsplash.jpg",
    imageUrl2:
      "/singleRooms/2019-06-13T06:03:27.844Zaaina-sharma-323673-unsplash.jpg",
    imageUrl3:
      "/singleRooms/2019-06-13T06:03:27.846Zandre-francois-mckenzie-1232474-unsplash.jpg",
    bathroom_no: 653,
    kitchen_no: 96,
    description:
      "deleniti dolorem assumenda\narchitecto et tenetur voluptatum non voluptatibus\nquis nam ut atque molestias consequuntur possimus et pariatur",
    price: 498,
    // rooms_no: 185,
    location: "Rhode Island",
    dimension: 961
    // palors_no: 856
  },
  {
    slug: uniqueString(),
    imageUrl1:
      "/singleRooms/2019-06-13T06:03:27.835Zchristopher-jolly-616571-unsplash.jpg",
    imageUrl2:
      "/singleRooms/2019-06-13T06:03:27.844Zaaina-sharma-323673-unsplash.jpg",
    imageUrl3:
      "/singleRooms/2019-06-13T06:03:27.846Zandre-francois-mckenzie-1232474-unsplash.jpg",
    bathroom_no: 817,
    kitchen_no: 61,
    description:
      "beatae illum recusandae\nrepellat voluptatibus non enim voluptas repudiandae fuga ab distinctio\nlabore vitae aut praesentium molestiae voluptas officiis dicta explicabo",
    price: 543,
    // rooms_no: 13,
    location: "Connecticut",
    dimension: 329
    // palors_no: 260
  },
  {
    slug: uniqueString(),
    imageUrl1:
      "/singleRooms/2019-06-13T06:03:27.835Zchristopher-jolly-616571-unsplash.jpg",
    imageUrl2:
      "/singleRooms/2019-06-13T06:03:27.844Zaaina-sharma-323673-unsplash.jpg",
    imageUrl3:
      "/singleRooms/2019-06-13T06:03:27.846Zandre-francois-mckenzie-1232474-unsplash.jpg",
    bathroom_no: 678,
    kitchen_no: 259,
    description:
      "qui tenetur dolores occaecati illum dolor\nnulla sed in corporis voluptate nam eius\nfacere qui odio eum sapiente blanditiis aut fuga est",
    price: 174,
    // rooms_no: 839,
    location: "Hawaii",
    dimension: 529
    // palors_no: 279
  },
  {
    slug: uniqueString(),
    imageUrl1:
      "/singleRooms/2019-06-13T06:03:27.835Zchristopher-jolly-616571-unsplash.jpg",
    imageUrl2:
      "/singleRooms/2019-06-13T06:03:27.844Zaaina-sharma-323673-unsplash.jpg",
    imageUrl3:
      "/singleRooms/2019-06-13T06:03:27.846Zandre-francois-mckenzie-1232474-unsplash.jpg",
    bathroom_no: 486,
    kitchen_no: 142,
    description:
      "ipsa incidunt quibusdam\nesse consectetur error\nsed dolor vitae eum voluptate accusamus laborum autem perspiciatis",
    price: 961,
    // rooms_no: 336,
    location: "Georgia",
    dimension: 238
    // palors_no: 913
  },
  {
    slug: uniqueString(),
    imageUrl1:
      "/singleRooms/2019-06-13T06:03:27.835Zchristopher-jolly-616571-unsplash.jpg",
    imageUrl2:
      "/singleRooms/2019-06-13T06:03:27.844Zaaina-sharma-323673-unsplash.jpg",
    imageUrl3:
      "/singleRooms/2019-06-13T06:03:27.846Zandre-francois-mckenzie-1232474-unsplash.jpg",
    bathroom_no: 649,
    kitchen_no: 664,
    description:
      "accusamus quia doloribus ea cum\nmolestiae odit non architecto aut quos impedit quidem\ndoloribus itaque ut consequuntur blanditiis",
    price: 786,
    // rooms_no: 140,
    location: "Iowa",
    dimension: 882
    // palors_no: 560
  },
  {
    slug: uniqueString(),
    imageUrl1:
      "/singleRooms/2019-06-13T06:03:27.835Zchristopher-jolly-616571-unsplash.jpg",
    imageUrl2:
      "/singleRooms/2019-06-13T06:03:27.844Zaaina-sharma-323673-unsplash.jpg",
    imageUrl3:
      "/singleRooms/2019-06-13T06:03:27.846Zandre-francois-mckenzie-1232474-unsplash.jpg",
    bathroom_no: 26,
    kitchen_no: 711,
    description:
      "natus non reiciendis accusantium excepturi rerum nulla\nenim dolores mollitia\nquo suscipit ipsam numquam a velit et",
    price: 324,
    // rooms_no: 567,
    location: "Arkansas",
    dimension: 341
    // palors_no: 608
  },
  {
    slug: uniqueString(),
    imageUrl1:
      "/singleRooms/2019-06-13T06:03:27.835Zchristopher-jolly-616571-unsplash.jpg",
    imageUrl2:
      "/singleRooms/2019-06-13T06:03:27.844Zaaina-sharma-323673-unsplash.jpg",
    imageUrl3:
      "/singleRooms/2019-06-13T06:03:27.846Zandre-francois-mckenzie-1232474-unsplash.jpg",
    bathroom_no: 847,
    kitchen_no: 84,
    description:
      "porro et iusto distinctio est labore sequi alias molestiae\nomnis quos ut provident molestiae fuga velit\npariatur alias aut quae et distinctio at",
    price: 960,
    // rooms_no: 692,
    location: "Massachusetts",
    dimension: 944
    // palors_no: 79
  },
  {
    slug: uniqueString(),
    imageUrl1:
      "/singleRooms/2019-06-13T06:03:27.835Zchristopher-jolly-616571-unsplash.jpg",
    imageUrl2:
      "/singleRooms/2019-06-13T06:03:27.844Zaaina-sharma-323673-unsplash.jpg",
    imageUrl3:
      "/singleRooms/2019-06-13T06:03:27.846Zandre-francois-mckenzie-1232474-unsplash.jpg",
    bathroom_no: 714,
    kitchen_no: 276,
    description:
      "debitis iste ut rerum voluptas atque itaque sapiente molestiae\neveniet voluptatibus dolor\ntotam sequi vitae tenetur vel laborum animi fuga",
    price: 611,
    // rooms_no: 694,
    location: "Colorado",
    dimension: 843
    // palors_no: 221
  },
  {
    slug: uniqueString(),
    imageUrl1:
      "/singleRooms/2019-06-13T06:03:27.835Zchristopher-jolly-616571-unsplash.jpg",
    imageUrl2:
      "/singleRooms/2019-06-13T06:03:27.844Zaaina-sharma-323673-unsplash.jpg",
    imageUrl3:
      "/singleRooms/2019-06-13T06:03:27.846Zandre-francois-mckenzie-1232474-unsplash.jpg",
    bathroom_no: 743,
    kitchen_no: 645,
    description:
      "qui repellendus voluptatem\neum nisi molestiae sit culpa atque\nrepellat nulla nemo nesciunt tenetur ducimus eius iste tempora",
    price: 701,
    // rooms_no: 284,
    location: "New York",
    dimension: 912
    // palors_no: 19
  },
  {
    slug: uniqueString(),
    imageUrl1:
      "/singleRooms/2019-06-13T06:03:27.835Zchristopher-jolly-616571-unsplash.jpg",
    imageUrl2:
      "/singleRooms/2019-06-13T06:03:27.844Zaaina-sharma-323673-unsplash.jpg",
    imageUrl3:
      "/singleRooms/2019-06-13T06:03:27.846Zandre-francois-mckenzie-1232474-unsplash.jpg",
    bathroom_no: 508,
    kitchen_no: 83,
    description:
      "minus tenetur adipisci cupiditate error officiis hic eum nihil\nnulla aut suscipit sequi vel consequatur ad quia\nquis laudantium sint",
    price: 112,
    // rooms_no: 970,
    location: "Montana",
    dimension: 361
    // palors_no: 901
  },
  {
    slug: uniqueString(),
    imageUrl1:
      "/singleRooms/2019-06-13T06:03:27.835Zchristopher-jolly-616571-unsplash.jpg",
    imageUrl2:
      "/singleRooms/2019-06-13T06:03:27.844Zaaina-sharma-323673-unsplash.jpg",
    imageUrl3:
      "/singleRooms/2019-06-13T06:03:27.846Zandre-francois-mckenzie-1232474-unsplash.jpg",
    bathroom_no: 581,
    kitchen_no: 583,
    description:
      "magni incidunt consequatur eveniet et est omnis\net in cupiditate aspernatur et consequatur\nalias quidem voluptatum dolore quia sed",
    price: 440,
    // rooms_no: 570,
    location: "Louisiana",
    dimension: 997
    // palors_no: 460
  },
  {
    slug: uniqueString(),
    imageUrl1:
      "/singleRooms/2019-06-13T06:03:27.835Zchristopher-jolly-616571-unsplash.jpg",
    imageUrl2:
      "/singleRooms/2019-06-13T06:03:27.844Zaaina-sharma-323673-unsplash.jpg",
    imageUrl3:
      "/singleRooms/2019-06-13T06:03:27.846Zandre-francois-mckenzie-1232474-unsplash.jpg",
    bathroom_no: 520,
    kitchen_no: 531,
    description:
      "natus vel facilis iusto\nnumquam hic sit officia velit explicabo\nveritatis doloremque est nostrum eaque minima",
    price: 135,
    // rooms_no: 68,
    location: "North Carolina",
    dimension: 776
    // palors_no: 278
  },
  {
    slug: uniqueString(),
    imageUrl1:
      "/singleRooms/2019-06-13T06:03:27.835Zchristopher-jolly-616571-unsplash.jpg",
    imageUrl2:
      "/singleRooms/2019-06-13T06:03:27.844Zaaina-sharma-323673-unsplash.jpg",
    imageUrl3:
      "/singleRooms/2019-06-13T06:03:27.846Zandre-francois-mckenzie-1232474-unsplash.jpg",
    bathroom_no: 420,
    kitchen_no: 367,
    description:
      "quaerat sit explicabo a\neius facilis ea atque\nprovident deleniti corrupti animi quam rerum",
    price: 475,
    // rooms_no: 107,
    location: "South Dakota",
    dimension: 500
    // palors_no: 802
  },
  {
    slug: uniqueString(),
    imageUrl1:
      "/singleRooms/2019-06-13T06:03:27.835Zchristopher-jolly-616571-unsplash.jpg",
    imageUrl2:
      "/singleRooms/2019-06-13T06:03:27.844Zaaina-sharma-323673-unsplash.jpg",
    imageUrl3:
      "/singleRooms/2019-06-13T06:03:27.846Zandre-francois-mckenzie-1232474-unsplash.jpg",
    bathroom_no: 72,
    kitchen_no: 293,
    description:
      "in id est\nnumquam mollitia error aspernatur quaerat omnis temporibus\nducimus placeat harum suscipit quasi et itaque velit et",
    price: 920,
    // rooms_no: 473,
    location: "Maine",
    dimension: 899
    // palors_no: 881
  },
  {
    slug: uniqueString(),
    imageUrl1:
      "/singleRooms/2019-06-13T06:03:27.835Zchristopher-jolly-616571-unsplash.jpg",
    imageUrl2:
      "/singleRooms/2019-06-13T06:03:27.844Zaaina-sharma-323673-unsplash.jpg",
    imageUrl3:
      "/singleRooms/2019-06-13T06:03:27.846Zandre-francois-mckenzie-1232474-unsplash.jpg",
    bathroom_no: 861,
    kitchen_no: 975,
    description:
      "nihil quia quia delectus dolorem repellendus possimus autem odio\neaque rerum inventore quae\nipsam omnis in sequi",
    price: 657,
    // rooms_no: 73,
    location: "Alabama",
    dimension: 615
    // palors_no: 769
  },
  {
    slug: uniqueString(),
    imageUrl1:
      "/singleRooms/2019-06-13T06:03:27.835Zchristopher-jolly-616571-unsplash.jpg",
    imageUrl2:
      "/singleRooms/2019-06-13T06:03:27.844Zaaina-sharma-323673-unsplash.jpg",
    imageUrl3:
      "/singleRooms/2019-06-13T06:03:27.846Zandre-francois-mckenzie-1232474-unsplash.jpg",
    bathroom_no: 671,
    kitchen_no: 299,
    description:
      "est quos est inventore repellat nostrum\nin et beatae debitis numquam totam laboriosam magni\nvel beatae et et aperiam praesentium et accusamus",
    price: 452,
    // rooms_no: 586,
    location: "Virginia",
    dimension: 603
    // palors_no: 421
  },
  {
    slug: uniqueString(),
    imageUrl1:
      "/singleRooms/2019-06-13T06:03:27.835Zchristopher-jolly-616571-unsplash.jpg",
    imageUrl2:
      "/singleRooms/2019-06-13T06:03:27.844Zaaina-sharma-323673-unsplash.jpg",
    imageUrl3:
      "/singleRooms/2019-06-13T06:03:27.846Zandre-francois-mckenzie-1232474-unsplash.jpg",
    bathroom_no: 366,
    kitchen_no: 808,
    description:
      "unde culpa consectetur omnis\nid molestiae ipsa aut\nneque magni aspernatur est voluptatum debitis sed",
    price: 346,
    // rooms_no: 772,
    location: "Louisiana",
    dimension: 891
    // palors_no: 821
  },
  {
    slug: uniqueString(),
    imageUrl1:
      "/singleRooms/2019-06-13T06:03:27.835Zchristopher-jolly-616571-unsplash.jpg",
    imageUrl2:
      "/singleRooms/2019-06-13T06:03:27.844Zaaina-sharma-323673-unsplash.jpg",
    imageUrl3:
      "/singleRooms/2019-06-13T06:03:27.846Zandre-francois-mckenzie-1232474-unsplash.jpg",
    bathroom_no: 654,
    kitchen_no: 654,
    description:
      "eius veniam et voluptas voluptas dolorem\nvoluptatum rerum consequatur ut pariatur itaque maxime quibusdam\nerror sunt in non incidunt cupiditate dolorem vel",
    price: 326,
    // rooms_no: 826,
    location: "Alaska",
    dimension: 695
    // palors_no: 800
  },
  {
    slug: uniqueString(),
    imageUrl1:
      "/singleRooms/2019-06-13T06:03:27.835Zchristopher-jolly-616571-unsplash.jpg",
    imageUrl2:
      "/singleRooms/2019-06-13T06:03:27.844Zaaina-sharma-323673-unsplash.jpg",
    imageUrl3:
      "/singleRooms/2019-06-13T06:03:27.846Zandre-francois-mckenzie-1232474-unsplash.jpg",
    bathroom_no: 588,
    kitchen_no: 366,
    description:
      "quis ea sequi quia aut nihil sunt ut\nconsequatur provident unde doloremque distinctio\nearum et impedit consectetur velit recusandae exercitationem reprehenderit inventore",
    price: 796,
    // rooms_no: 428,
    location: "Utah",
    dimension: 736
    // palors_no: 429
  },
  {
    slug: uniqueString(),
    imageUrl1:
      "/singleRooms/2019-06-13T06:03:27.835Zchristopher-jolly-616571-unsplash.jpg",
    imageUrl2:
      "/singleRooms/2019-06-13T06:03:27.844Zaaina-sharma-323673-unsplash.jpg",
    imageUrl3:
      "/singleRooms/2019-06-13T06:03:27.846Zandre-francois-mckenzie-1232474-unsplash.jpg",
    bathroom_no: 228,
    kitchen_no: 207,
    description:
      "nemo ut dolore tempora omnis accusantium rerum sint quia\nconsectetur nesciunt ex et rem sunt qui expedita vel\naperiam consequatur voluptatem consequuntur expedita quaerat maxime",
    price: 744,
    // rooms_no: 108,
    location: "Florida",
    dimension: 811
    // palors_no: 960
  },
  {
    slug: uniqueString(),
    imageUrl1:
      "/singleRooms/2019-06-13T06:03:27.835Zchristopher-jolly-616571-unsplash.jpg",
    imageUrl2:
      "/singleRooms/2019-06-13T06:03:27.844Zaaina-sharma-323673-unsplash.jpg",
    imageUrl3:
      "/singleRooms/2019-06-13T06:03:27.846Zandre-francois-mckenzie-1232474-unsplash.jpg",
    bathroom_no: 500,
    kitchen_no: 79,
    description:
      "maxime sapiente necessitatibus et saepe\nnihil optio voluptas\nprovident veniam odit",
    price: 749,
    // rooms_no: 103,
    location: "North Carolina",
    dimension: 945
    // palors_no: 118
  },
  {
    slug: uniqueString(),
    imageUrl1:
      "/singleRooms/2019-06-13T06:03:27.835Zchristopher-jolly-616571-unsplash.jpg",
    imageUrl2:
      "/singleRooms/2019-06-13T06:03:27.844Zaaina-sharma-323673-unsplash.jpg",
    imageUrl3:
      "/singleRooms/2019-06-13T06:03:27.846Zandre-francois-mckenzie-1232474-unsplash.jpg",
    bathroom_no: 328,
    kitchen_no: 927,
    description:
      "sint impedit quaerat molestias voluptas quia consequatur in\nillum voluptatem cumque et architecto illo accusantium\nperferendis dolor ea",
    price: 559,
    // rooms_no: 359,
    location: "Vermont",
    dimension: 586
    // palors_no: 518
  },
  {
    slug: uniqueString(),
    imageUrl1:
      "/singleRooms/2019-06-13T06:03:27.835Zchristopher-jolly-616571-unsplash.jpg",
    imageUrl2:
      "/singleRooms/2019-06-13T06:03:27.844Zaaina-sharma-323673-unsplash.jpg",
    imageUrl3:
      "/singleRooms/2019-06-13T06:03:27.846Zandre-francois-mckenzie-1232474-unsplash.jpg",
    bathroom_no: 193,
    kitchen_no: 377,
    description:
      "sapiente quia corrupti\nquod reiciendis qui quis incidunt unde\nharum et adipisci ipsa eius cum natus",
    price: 346,
    // rooms_no: 665,
    location: "Maryland",
    dimension: 811
    // palors_no: 649
  },
  {
    slug: uniqueString(),
    imageUrl1:
      "/singleRooms/2019-06-13T06:03:27.835Zchristopher-jolly-616571-unsplash.jpg",
    imageUrl2:
      "/singleRooms/2019-06-13T06:03:27.844Zaaina-sharma-323673-unsplash.jpg",
    imageUrl3:
      "/singleRooms/2019-06-13T06:03:27.846Zandre-francois-mckenzie-1232474-unsplash.jpg",
    bathroom_no: 2,
    kitchen_no: 507,
    description:
      "ipsam et cum rerum voluptatem\nalias necessitatibus omnis perferendis velit\narchitecto voluptatem distinctio a incidunt non ullam sed eos",
    price: 620,
    // rooms_no: 538,
    location: "Michigan",
    dimension: 619
    // palors_no: 852
  },
  {
    slug: uniqueString(),
    imageUrl1:
      "/singleRooms/2019-06-13T06:03:27.835Zchristopher-jolly-616571-unsplash.jpg",
    imageUrl2:
      "/singleRooms/2019-06-13T06:03:27.844Zaaina-sharma-323673-unsplash.jpg",
    imageUrl3:
      "/singleRooms/2019-06-13T06:03:27.846Zandre-francois-mckenzie-1232474-unsplash.jpg",
    bathroom_no: 469,
    kitchen_no: 164,
    description:
      "beatae autem autem id aut omnis architecto sit occaecati\nmollitia reiciendis veritatis ducimus\nreiciendis culpa voluptatibus officia ratione recusandae",
    price: 578,
    // rooms_no: 34,
    location: "Wyoming",
    dimension: 208
    // palors_no: 153
  },
  {
    slug: uniqueString(),
    imageUrl1:
      "/singleRooms/2019-06-13T06:03:27.835Zchristopher-jolly-616571-unsplash.jpg",
    imageUrl2:
      "/singleRooms/2019-06-13T06:03:27.844Zaaina-sharma-323673-unsplash.jpg",
    imageUrl3:
      "/singleRooms/2019-06-13T06:03:27.846Zandre-francois-mckenzie-1232474-unsplash.jpg",
    bathroom_no: 526,
    kitchen_no: 694,
    description:
      "nam nihil quis soluta\nquos voluptas qui et tempora qui rerum est aperiam\ndolorum quisquam dolores qui impedit sapiente perferendis voluptas",
    price: 606,
    // rooms_no: 484,
    location: "Maryland",
    dimension: 778
    // palors_no: 959
  },
  {
    slug: uniqueString(),
    imageUrl1:
      "/singleRooms/2019-06-13T06:03:27.835Zchristopher-jolly-616571-unsplash.jpg",
    imageUrl2:
      "/singleRooms/2019-06-13T06:03:27.844Zaaina-sharma-323673-unsplash.jpg",
    imageUrl3:
      "/singleRooms/2019-06-13T06:03:27.846Zandre-francois-mckenzie-1232474-unsplash.jpg",
    bathroom_no: 531,
    kitchen_no: 958,
    description:
      "corrupti adipisci sint\ndolorem vel rem molestiae voluptatem quis natus\nhic saepe reprehenderit architecto ex",
    price: 441,
    // rooms_no: 27,
    location: "Mississippi",
    dimension: 626
    // palors_no: 76
  },
  {
    slug: uniqueString(),
    imageUrl1:
      "/singleRooms/2019-06-13T06:03:27.835Zchristopher-jolly-616571-unsplash.jpg",
    imageUrl2:
      "/singleRooms/2019-06-13T06:03:27.844Zaaina-sharma-323673-unsplash.jpg",
    imageUrl3:
      "/singleRooms/2019-06-13T06:03:27.846Zandre-francois-mckenzie-1232474-unsplash.jpg",
    bathroom_no: 407,
    kitchen_no: 12,
    description:
      "odio debitis sit officia repudiandae natus eaque omnis voluptatem\nsit impedit quo quia voluptas\nexplicabo debitis natus aliquam laboriosam eveniet fuga recusandae voluptate",
    price: 534,
    // rooms_no: 951,
    location: "Nebraska",
    dimension: 520
    // palors_no: 998
  },
  {
    slug: uniqueString(),
    imageUrl1:
      "/singleRooms/2019-06-13T06:03:27.835Zchristopher-jolly-616571-unsplash.jpg",
    imageUrl2:
      "/singleRooms/2019-06-13T06:03:27.844Zaaina-sharma-323673-unsplash.jpg",
    imageUrl3:
      "/singleRooms/2019-06-13T06:03:27.846Zandre-francois-mckenzie-1232474-unsplash.jpg",
    bathroom_no: 492,
    kitchen_no: 73,
    description:
      "maiores officiis voluptate provident vitae beatae quos neque\natque reprehenderit illum magnam minima tempora aliquam\nsapiente qui ea perferendis molestiae vitae eaque quia",
    price: 281,
    // rooms_no: 48,
    location: "Massachusetts",
    dimension: 681
    // palors_no: 12
  },
  {
    slug: uniqueString(),
    imageUrl1:
      "/singleRooms/2019-06-13T06:03:27.835Zchristopher-jolly-616571-unsplash.jpg",
    imageUrl2:
      "/singleRooms/2019-06-13T06:03:27.844Zaaina-sharma-323673-unsplash.jpg",
    imageUrl3:
      "/singleRooms/2019-06-13T06:03:27.846Zandre-francois-mckenzie-1232474-unsplash.jpg",
    bathroom_no: 344,
    kitchen_no: 702,
    description:
      "dolor eveniet cum ratione quos sit\ndolorem nihil et\nculpa aut natus cumque quaerat",
    price: 861,
    // rooms_no: 48,
    location: "Delaware",
    dimension: 67
    // palors_no: 563
  },
  {
    slug: uniqueString(),
    imageUrl1:
      "/singleRooms/2019-06-13T06:03:27.835Zchristopher-jolly-616571-unsplash.jpg",
    imageUrl2:
      "/singleRooms/2019-06-13T06:03:27.844Zaaina-sharma-323673-unsplash.jpg",
    imageUrl3:
      "/singleRooms/2019-06-13T06:03:27.846Zandre-francois-mckenzie-1232474-unsplash.jpg",
    bathroom_no: 499,
    kitchen_no: 52,
    description:
      "provident omnis quia eligendi dignissimos consequatur dicta\ndolorem voluptatem sint quia\nea repellat commodi",
    price: 140,
    // rooms_no: 75,
    location: "South Carolina",
    dimension: 330
    // palors_no: 2
  },
  {
    slug: uniqueString(),
    imageUrl1:
      "/singleRooms/2019-06-13T06:03:27.835Zchristopher-jolly-616571-unsplash.jpg",
    imageUrl2:
      "/singleRooms/2019-06-13T06:03:27.844Zaaina-sharma-323673-unsplash.jpg",
    imageUrl3:
      "/singleRooms/2019-06-13T06:03:27.846Zandre-francois-mckenzie-1232474-unsplash.jpg",
    bathroom_no: 332,
    kitchen_no: 203,
    description:
      "et fugit laudantium nulla autem atque voluptatem praesentium incidunt\naut est aliquid assumenda voluptas ipsum eaque\nad rerum eum sequi",
    price: 208,
    // rooms_no: 704,
    location: "Oregon",
    dimension: 170
    // palors_no: 252
  },
  {
    slug: uniqueString(),
    imageUrl1:
      "/singleRooms/2019-06-13T06:03:27.835Zchristopher-jolly-616571-unsplash.jpg",
    imageUrl2:
      "/singleRooms/2019-06-13T06:03:27.844Zaaina-sharma-323673-unsplash.jpg",
    imageUrl3:
      "/singleRooms/2019-06-13T06:03:27.846Zandre-francois-mckenzie-1232474-unsplash.jpg",
    bathroom_no: 130,
    kitchen_no: 613,
    description:
      "provident distinctio corporis cupiditate consequatur eum\namet voluptatibus earum et et\ncorrupti adipisci eligendi necessitatibus rerum laboriosam voluptas tenetur minus",
    price: 945,
    // rooms_no: 528,
    location: "Oklahoma",
    dimension: 201
    // palors_no: 171
  },
  {
    slug: uniqueString(),
    imageUrl1:
      "/singleRooms/2019-06-13T06:03:27.835Zchristopher-jolly-616571-unsplash.jpg",
    imageUrl2:
      "/singleRooms/2019-06-13T06:03:27.844Zaaina-sharma-323673-unsplash.jpg",
    imageUrl3:
      "/singleRooms/2019-06-13T06:03:27.846Zandre-francois-mckenzie-1232474-unsplash.jpg",
    bathroom_no: 804,
    kitchen_no: 738,
    description:
      "ab quas necessitatibus ut ex rerum porro velit\nipsum repellat soluta\naliquam dolor rerum magnam qui sed explicabo",
    price: 836,
    // rooms_no: 64,
    location: "Illinois",
    dimension: 672
    // palors_no: 273
  },
  {
    slug: uniqueString(),
    imageUrl1:
      "/singleRooms/2019-06-13T06:03:27.835Zchristopher-jolly-616571-unsplash.jpg",
    imageUrl2:
      "/singleRooms/2019-06-13T06:03:27.844Zaaina-sharma-323673-unsplash.jpg",
    imageUrl3:
      "/singleRooms/2019-06-13T06:03:27.846Zandre-francois-mckenzie-1232474-unsplash.jpg",
    bathroom_no: 524,
    kitchen_no: 229,
    description:
      "quod nisi quos\net quia sit\nrecusandae pariatur sint nostrum et odit",
    price: 153,
    // rooms_no: 167,
    location: "Massachusetts",
    dimension: 933
    // palors_no: 450
  }
];
let duration = ["Per Day", "Per Night", "Per Week", "Per Month", "Per Year"];
// let floors = [4, 1, 2, 3];
// let dimension = [3200, 2500, 3000, 5000, 5200];
let price = [
  20000,
  15000,
  5000,
  3500,
  2000,
  10000,
  15000,
  4500,
  2800,
  1300,
  10000
];
// let rooms = [4, 3, 2, 1, 6, 5, 7];
// let parlor = [1, 3, 2];
let kitchen = [0, 1];
let bathroom = [0, 1];
let location = [
  "Bokwango",
  "Molyko",
  "milingo",
  "Mayor's Street",
  "Bundouma",
  "UB south",
  "UB Junction",
  "Mile 17",
  "Chief Street"
];

async function Users() {
  const users = await User.findAll({
    where: {
      isHouseProvider: true
    },
    raw: true
  });
  let userId = [];
  await Array.from(users).forEach(user => {
    userId.push(user.id);
  });

  console.log(userId);
  let tobeStoreRoom = [];
  rooms.forEach(room => {
    // let dimensionLength = dimension.length;
    // let floorLength = floors.length;
    let durationLenght = duration.length;
    let priceLength = price.length;
    // let roomLenght = rooms.length;
    // let parlorLength = parlor.length;
    let num = userId.length;
    let locationLength = location.length;
    let kitchenLength = kitchen.length;
    let bathroomLength = bathroom.length;

    // dimensionIndex = Math.floor(Math.random() * dimensionLength);
    // floorIndex = Math.floor(Math.random() * floorLength);
    tobeUseIndex = Math.floor(Math.random() * num);
    tobeUseDurationIndex = Math.floor(Math.random() * durationLenght);
    tobeUsePriceIndex = Math.floor(Math.random() * priceLength);
    // tobeUseRoomIndex = Math.floor(Math.random() * roomLenght);
    // tobeUseParlorIndex = Math.floor(Math.random() * parlorLength);
    kitchenIndex = Math.floor(Math.random() * kitchenLength);
    tobeUseLocationIndex = Math.floor(Math.random() * locationLength);
    bathroomIndex = Math.floor(Math.random() * bathroomLength);

    // room["floor_no"] = floors[floorIndex];
    room["userId"] = userId[tobeUseIndex];
    room["duration"] = duration[tobeUseDurationIndex];
    room.price = price[tobeUsePriceIndex];
    // room.rooms_no = rooms[tobeUseRoomIndex];
    // room.palors_no = parlor[tobeUseParlorIndex];
    room.kitchen_no = kitchen[kitchenIndex];
    room.location = location[tobeUseLocationIndex];
    room.bathroom_no = bathroom[bathroomIndex];
    // room.dimension = dimension[dimensionIndex];
    tobeStoreRoom.push(room);
  });
  console.log(tobeStoreRoom);
  singleRoom.bulkCreate(tobeStoreRoom).then(data => {
    console.log(data);
  });
}
Users();
