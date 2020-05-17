import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    contacts: [

      { "id": 1, "first_name": "Leticia", "last_name": "Hurlin", "email": "lhurlin0@eventbrite.com", "birsday": "1987-05-17", "website": "newsvine.com", "foto": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAGGSURBVDjLpZM7a1VREIW/fXKTIhAfVSQIIY2PWkEELe0FiZVgWkvBVhCsrLUQ/AdpxCKIhelstRCiAcFExEbRhAu5j71nLYtzvSeHXF9kYLOb2d+etWYm2eYw0QFYefTmNrAIXALOgY1JyFRVokogCQU70x1/OH3yyHlk7lw7k7DNzYevn/g/48Hqhm3XFQCXAW6sXscIy4SEJCKCCBEKIgJJvLi1zvtPO4OxBOQTAMM8ZH7h2B81b25sA9Dr55kxwPYsQM6Zz9tfsY0MViC51m/j0Q3giNQA5A7A05W1f3ZfIfYDEsDyvZf0JWRYu3+Fj192Jz5eWjiKFQBUNaCmfetlLpyd53uvjJPnZmda51e4tAC1rm4/yDZ7g9L6MYfJ0R44qTSANKpgMMj0chD9/FcPXIb7PKChT5rs6al0EODSAFRkIAE8f7XVSuzuDSdXMOpnByCkLWDp7eOrB9z+rQT7RzOJoWfLd9dP2b6IdFwqYGEFVgEHlqg31wZ1oXoHkA67zj8BVEcprN9nEQAAAAAASUVORK5CYII=", "number": "907-553-7584" },
      { "id": 2, "first_name": "Sherman", "last_name": "Eccleshall", "email": "seccleshall1@surveymonkey.com", "birsday": "1987-05-16", "website": "parallels.com", "foto": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAJvSURBVDjLhZNdSJNhFMfPM9eW+3BjbGIKuik5toZCgYRIF/axEUbSRQUjiqigi7roIiiCrrwIwusKbybtJuquZLSBWcSaFU0slC0/arbC6PVjn+/Htv7PKKlwduDH/32ec55zzvPxskqlQpvZtUf7K2JJpJXCGuXkfPnBubm6zeJUVMMYUxSv+zwNdl2iYkmqFVY7AalLamIqqjAiheSacep/J25HBlazcoFaTd3V/OUyI4fFTbuH6zOZvCgmb5StWyao2yaZ3OZeajLtoeVMitYKAvXZj2FPOsPT2Ynif7ew8PlW92xunOaFCbLom8lqbKP48nNKrRupd/t968CVu11bJhi0F6+rl4ZoMveEZn6EaEZ4Rq9TyfXG7Cmysjz128sX/jrs6enpO4qi7AMky7IGtHs8HvZwbFwM2c5oVYKTLrcM08t4onCkf299JBLJS5L0SRRFgn5XYaFis9lcSObCxFWNRsOi0eirjh1m7YnVkZOnDTcpkUgcb7Pq6sPh8Iher9cVi8Uhp9PpQpJ2FovFOhhjH3O5XAsSCMAN0nA28krAge9FaDP0G7QJrGi12rQgCGOqnp6euWw2u44OviDgMBxvUeGgTqebgvoMBsM7qBf6AX6fyWTiesDhcPAtvGD8KYdgGJyFg3fQCf0KbYXO8w7AAh8DPm/DOQlgEbs/Wr0FVLj3RwdTvEJDQ8MbXtFsNvOOfBaLJY7xIeh7JPEiQRpMst8/0+joqAyHEUF2frrQTmgS7AQJBDvAEmhC5V3gYiAQ6Nt4iVigBgUE068r2gCLNuDXjUOnUqn0uPoOav3OW5nf79dwDQaD0k8mKaZoCMdoNAAAAABJRU5ErkJggg==", "number": "426-238-5878" },
      { "id": 3, "first_name": "Morena", "last_name": "Cowburn", "email": "mcowburn2@smugmug.com", "birsday": "1987-05-18", "website": "creativecommons.org", "foto": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAIsSURBVDjLpVNLSJQBEP7+h6uu62vLVAJDW1KQTMrINQ1vPQzq1GOpa9EppGOHLh0kCEKL7JBEhVCHihAsESyJiE4FWShGRmauu7KYiv6Pma+DGoFrBQ7MzGFmPr5vmDFIYj1mr1WYfrHPovA9VVOqbC7e/1rS9ZlrAVDYHig5WB0oPtBI0TNrUiC5yhP9jeF4X8NPcWfopoY48XT39PjjXeF0vWkZqOjd7LJYrmGasHPCCJbHwhS9/F8M4s8baid764Xi0Ilfp5voorpJfn2wwx/r3l77TwZUvR+qajXVn8PnvocYfXYH6k2ioOaCpaIdf11ivDcayyiMVudsOYqFb60gARJYHG9DbqQFmSVNjaO3K2NpAeK90ZCqtgcrjkP9aUCXp0moetDFEeRXnYCKXhm+uTW0CkBFu4JlxzZkFlbASz4CQGQVBFeEwZm8geyiMuRVntzsL3oXV+YMkvjRsydC1U+lhwZsWXgHb+oWVAEzIwvzyVlk5igsi7DymmHlHsFQR50rjl+981Jy1Fw6Gu0ObTtnU+cgs28AKgDiy+Awpj5OACBAhZ/qh2HOo6i+NeA73jUAML4/qWux8mt6NjW1w599CS9xb0mSEqQBEDAtwqALUmBaG5FV3oYPnTHMjAwetlWksyByaukxQg2wQ9FlccaK/OXA3/uAEUDp3rNIDQ1ctSk6kHh1/jRFoaL4M4snEMeD73gQx4M4PsT1IZ5AfYH68tZY7zv/ApRMY9mnuVMvAAAAAElFTkSuQmCC", "number": "703-143-7112" },
      { "id": 4, "first_name": "Faustine", "last_name": "Krauze", "email": "fkrauze3@is.gd", "birsday": "1987-05-14", "website": "ehow.com", "foto": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAJ2SURBVBgZBcFLiJVlGADg5/3+b87cbLyFNBJ4oexGQYqIi6hFQambgohoE0aLUqGCaBcuonWLUFe1CIJolWCLaiK1C0FUREpRBgmWNpqi4XjOnP97e57ITI+8fuLZ6bnJZ0rYhikECGSQzbi1M1cu5UJcvfzqycN7RgCRmXa9+dXJ9w5su6uUWJV0EoBMSIv/LXv/uyvOnx1eP/3zL2u+PLxnCBVKF3cMarfq1D+6EkGQjT6b8TgtLfceuv0mO7ZU37bFmWx3Xn5w/7HVx9/ePSwQESsysxt0xUShBl2hCyIoAs383MCe7fM23jY5Xedm34UCSUBBCUqEEqFEKBFKF/7+d8mGFcvuXhOe37lWN9E9CRUgk9oRQkZofVJC7Rhk8fulNGpjrY08sHlS1DKGCpkkahQpJaKEQDayKwwoLbTWSYUooEKiIYIQEolsTHSAKKIPWVJDJlChjcmkIZCZoBS0ULskgySFvtE3oEJrKTNJUgKQQAj950eMFg5ZPvebU+vW2zH9WGWnCn2jT7LRACRoyY2FI6ZOfeC+p54zuekeSz99YubkQv304YkDFdo4tUwHfxgJqQWZQSMjPX30Lbv3vmDqzBeceMPMylU2b9jg+1/z5Qrjca/vmZ+bsHVd0ZI+6YOWrL7yp6lbNrHrFQD14LyuxcYK42Fr49Zy1ItvzvVapBSgJetXzrv+4zGzR180XDrvOq5d7fSdvyos3+gvzA66m1+7dzSbmUXSACunq4vn9zt9/B23rp5WuwnXFsf+uNBJ/aHITNv3fbZvvJyPR8T9KWcAJImUHh0eq1sXP+zWDi/G1cHc8Oxgy8cvffT1E/8D2iAtJW5RUGAAAAAASUVORK5CYII=", "number": "259-197-4440" },
      { "id": 5, "first_name": "Kira", "last_name": "Bissell", "email": "kbissell4@examiner.com", "birsday": "1987-05-18", "website": "freewebs.com", "foto": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAIsSURBVDjLpVNLSJQBEP7+h6uu62vLVAJDW1KQTMrINQ1vPQzq1GOpa9EppGOHLh0kCEKL7JBEhVCHihAsESyJiE4FWShGRmauu7KYiv6Pma+DGoFrBQ7MzGFmPr5vmDFIYj1mr1WYfrHPovA9VVOqbC7e/1rS9ZlrAVDYHig5WB0oPtBI0TNrUiC5yhP9jeF4X8NPcWfopoY48XT39PjjXeF0vWkZqOjd7LJYrmGasHPCCJbHwhS9/F8M4s8baid764Xi0Ilfp5voorpJfn2wwx/r3l77TwZUvR+qajXVn8PnvocYfXYH6k2ioOaCpaIdf11ivDcayyiMVudsOYqFb60gARJYHG9DbqQFmSVNjaO3K2NpAeK90ZCqtgcrjkP9aUCXp0moetDFEeRXnYCKXhm+uTW0CkBFu4JlxzZkFlbASz4CQGQVBFeEwZm8geyiMuRVntzsL3oXV+YMkvjRsydC1U+lhwZsWXgHb+oWVAEzIwvzyVlk5igsi7DymmHlHsFQR50rjl+981Jy1Fw6Gu0ObTtnU+cgs28AKgDiy+Awpj5OACBAhZ/qh2HOo6i+NeA73jUAML4/qWux8mt6NjW1w599CS9xb0mSEqQBEDAtwqALUmBaG5FV3oYPnTHMjAwetlWksyByaukxQg2wQ9FlccaK/OXA3/uAEUDp3rNIDQ1ctSk6kHh1/jRFoaL4M4snEMeD73gQx4M4PsT1IZ5AfYH68tZY7zv/ApRMY9mnuVMvAAAAAElFTkSuQmCC", "number": "473-270-1283" },
      { "id": 6, "first_name": "Chico", "last_name": "Luscombe", "email": "cluscombe5@pagesperso-orange.fr", "birsday": "1987-05-19", "website": "pcworld.com", "foto": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAIESURBVDjLlVJtaxpBEH7uvNSL50skFBqCiDVYpCWiIAjtx4Ih4I/zs78jkD9QioVAUBGNWigqRfpBxSO+3LnbmY13mNQWOvAwuzszz7zsQEoJBomWzWY/V6vVb5lM5oruBr/tYBQKhU+1Wu0r+/CbF6cOA02Tv9jr5gbn+TyGd3cQlQpe40nYFry9xZvLS/y8v8fm+lrZ0lJqukbCTlYwCCsWw3a7RTgex3EggLiuK5jkYkYiynYcjcLcEXOsvjvDNAx0BgPl1O31IIjEPjmBHQ5ja5rodLvK1nl48Ang9dgHRIyyN87O0LNtXFD2FLWmU4B0HKxdF99JDwhvhUCB9CPZLwDd2K/gw+kp3lsW5GYDl5wEg8heEdG7oyNkSGuE4GKBRyL1q6jX69J13b/CcRy5XC4VWPiNYzjWwAFZr9dot9tIp9Po9/uq9/l8jnK57H25L/ohAg4ejUaI0ORzuRxSqRRCoRAosw+P6BmB95inXfAWhdFqtVQ1Dg+UqqNW/Jg/WnhZ4mw2g6DJc/BkMlFnhud3cAb7ZNwOrbaaQzKZ5OXBcDiEQb/GA9XljoqU2A+u0CqzqVgswqKv5awcPB6PfSJ/Bgv6V5uEjoIN+wjQHrDmCjhzIpHAarVSLfktdGlNyTHKZf1LvAqYrNlsolQqPRFMp9MvjUbjI/5D6Dd+sP4NLTpNB1cxufkAAAAASUVORK5CYII=", "number": "590-713-4484" },
      { "id": 7, "first_name": "Binni", "last_name": "Jakubovitch", "email": "bjakubovitch6@cbc.ca", "birsday": "1987-05-20", "website": "weather.com", "foto": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAH3SURBVDjLjZNPaxpRFMXTfo4E+h1S8hmy7bJ0G+i60ECg2QXaIqVaqwttplXCSEMNDlZTqdEaEkyslIo4s9BG4yIOYzIo/v+Xnrz7UofR2DYDh1m8d37v3vPenQMwR2LfPNMi09J/dI/pruEzARZ7vV59OBxejkYjzBJbh8PheGOGmAFLZG61Wmi328jlchBFEYIgIB6PQ9M0DlFVFU6n04CMzXcIQBu63S5qtRp8Ph/K5TKy2SxCoRCq1SoHdDod0CEul+saMg3o9/vI5/MIh8OoVCpwu92QJAmBQACxWGyiJZ7JNIC1gUKhgGAwCEVR4PF4YLfbkUgkYLFYeCUE/ifA7/cjnU7z8lOpFP8nk0lYrVbenq7rswFJpQ7bThFbgUPIsoxoNMqzoCpsNhuHNZtNNBqNm4Anr3btL7dPIR2dY917Aqe4xyvJZDL8RuhkyodCJE0Ann8srW2Ipd+fj3VEfujYimtYea1MBEatEYBE78EAMOPqM2+pLx1dIPxdx6cDqqCID19VbhprMBhwkXkCsCqcdHcOzxE8vsD2fhVr74vwRlXjVLPZLAPw+G2hthmpQPym4em7XxAiZzdKnyUD8PCF/OjBhlxfXv/ZcX85Y/Qh/jYLU7o0QvxzE/dZQG1auI2Z7W3y6TUBFghyi3Eei0Z/4QrVT8W6WBitpQAAAABJRU5ErkJggg==", "number": "584-810-4933" },
      { "id": 8, "first_name": "Brita", "last_name": "Vedyashkin", "email": "bvedyashkin7@woothemes.com", "birsday": "1987-05-10", "website": "meetup.com", "foto": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAKuSURBVDjLlZLLS5RRGMbf7zrzebdw8FaSqJAbF0GgRBvptinoPxDKRdDKQjBw2TKClgVJCwmUyMBKydDKS9TCME2tRhs1cZwZ57ud853bfB0HiiAVOvBuDuf5ve/7nEcJwxAOOgPTtk4Fr6ZU1OCAVyBCm2Td9jEdcxG5pBwEeDyZtaRwjAvWSpkAxjkITsGKqJBIuvB903upH9QdE3rd1MLW0gIVCMsBoYq8U8H2CUQNBdJZp33fCe6PbJo+4XZVmRHFhEDKCXaB4Accii0NFlfT8GNt56a6X/er56qog/Cd1aQjRRQictasR8B2EXgIQyblAbX95X9WeDSRPiriz3oZY1pvZ2dH590Z7GB+q7LcjBZHVdhMBaCpEfBsCXDR9p8V+t9lLGlUP7PXLxyJbkUMw4DZ2dm+rq6ujjPdz09xTEZrY8VWYZEh/WAwNxWHwEV1eYDsqsuOCxFDaYRQwGZ8ljeUE31+fr4PY3xFVulM5mQzC4LRypoSy037kEykvuZytDnvAQ5oNSa8scAE0JQcGIeb9LcrJl02Tj+U4gcIoanG8MU35qKzK58SaCux9ZSLoGVxvJvnPfAQrQEQEhTCRhpBYVQB61CNyZY+v6qvrzdisRgMDg6O1+kjbUt+23EpTPz2LA9wMa7QFJBuhxIWQHKHQWmBDrXHGozJuTfQ4sWBEDI9NDSUkc8zf5ueB9gubiqyVJBacBDZXQm2MhSiugZW7QkYfj/NuGi5ttd3a9uxi6bM9FhFmak5fgCmHEXqQFcVEDkBiZVt+edhz8fh7om9AHrWxV5JgWoImXMfE1jbsMHd8QF7AQQyONjxp4UQ9/YLnJ710JgaGucXUi6sr2cY84MeQfmyCOg2p3RD5PjPL69v8H0ByEWXnSR7IoPSzjEt+jDQQeE/zi9kq6pv7shelwAAAABJRU5ErkJggg==", "number": "721-455-7498" },
      { "id": 9, "first_name": "Devonne", "last_name": "Pinnion", "email": "dpinnion8@artisteer.com", "birsday": "1987-05-1", "website": "php.net", "foto": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAJZSURBVDjLjZNfTFJRHMdBmX/m1Pln+qDTNjcmD77oo62trYd667H10nNPvrbWIy+u0FFAOhrMzWZKXaYE8YAx4+Ll8kfL/NPoIuBdmAVjCQQb1LdzLkg2wzrb5557zu/8Pud3/xwZABmFNLlKpbqi1Wr9SqXyKhkr6FwFxejo6EWj0cjRNXSumkcvAuk4QsBuRyKRAG+zSWOhAr3fcDqlWMjhqMYqG8vkdLDV2IhdloUoitgh/dv6eqTq6iQ25XLser1SjK7ZrAgq1ZUF4ZYWMHNziMViYMxmbHR3I97ZiXhbG4LNzWBMpnKM9Ht/E3xtb8fq8DBm+vvhGhxEZGAA0b4+7Pf0YI+I7K2teNjUhJcNDUiQis4IMl1dOBofx+exMRyOjEAksvjQEKJEFCEiobcXH0lVQkcHUgrFnwKe51EqlWpSLBaRz+claKNzNKemIJfLIRAIIJVK4smSA48ZN6YtPPTWEGYsr1HIZ88X0GSr1YoF+xosngjCiSyiyQL4yDFWeBHzK2/g8/nOCmipJxKGYaBn/NgRj+GPfcf6fg5ewtanPHRL3tqCE6hAs+iD8KWA9UgWrJDF6ocMQgcFPHoRBMdx/xbonvPYFjNYC5eTKUGxgPvzrPSY1V+ZCkjSj9MCyuIrDq7QAYKxHLhYHgGyu+1dBtOzC7A/1f0WuFwupNPpb1Ry+mUmjpJwsu9JJRwM5AtonvGYmrUgsGyAffIm7l2/cEMS6PV6uN1ueDyec2HJOWBMU3BobmF7+QGME5dykkCtVrPkGON/mbx7G+Y7134aJi7jF1A6sIfsK39SAAAAAElFTkSuQmCC", "number": "191-642-5777" },
      { "id": 10, "first_name": "Valli", "last_name": "Storm", "email": "vstorm9@businessinsider.com", "birsday": "1987-11-20", "website": "diigo.com", "foto": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAGxSURBVDjLpVM9a8JQFL0vUUGFfowFpw4dxM2vf9G5newv6OIvEDoVOnUQf0G7CEYQHVzUVZQoaKFugoW20EUaTd5L+u6NSQORdvDC5dyEd+499ySPOY4Dh0TEK8rl8n0mk7lOJBIpVVWBMUaJAzCFEMA5B8MwPpfL5VOlUrklonegWq3qEr+c/2Nbq9VWHs9XkEwm0xLUy/Lzn5KbD1exaDR6FlpBURSq4/E4HJ2c4jMwmYpcw6vf31be2bAHQTPVHYEFyAr7VeEACzfAQKPuSmlCy7LINBcteifSx3ROWutzlCAZ3Z9Op9ButyEWi8F8Poder0drXTQ1SNUeqalt22EFQrgvC4UC5HI5mow1EjA/SjdEjEQiYAd+HV8BF5xwNBpBo9EgBZPJBDqdDimYzWbQ7XapmeA8rIDLiRjFYpEm4zTEfD7v19lslhSgJ2EFXBAOh0Oo1+vk/ng8Bk3TyBtd16HVarkrCRFWYFqmrwAzqMDzBhMVWNaeFSzT5P3BQJXI3G+9P14XC8c0t5tQg/V6/dLv9c+l3ATDFrvL5HZyCBxpv5Rvboxv3eOxQ6/zD+IbEqvBQWgxAAAAAElFTkSuQmCC", "number": "791-197-5751" },
 
    ],
    search: "",
    sortMode: "first_name",
    filterName: "",
    contactTags: ["friends", "boss", "collegs"],

  },
  getters: {

    getContacts(state) {
      return state.contacts;
    },
    getContactById: state => id => {
      return state.contacts.find(c => c.id === id);
    },
    getSortContacts(state) {
      let sortFunction = {
        first_name(a, b) {
          if (a.first_name < b.first_name) {
            //console.log(-1);
            return -1;
          }
          if (a.first_name > b.first_name) {
            //console.log(1);
            return 1;
          }
          return 0;
        },
        last_name(a, b) {
          if (a.last_name < b.last_name)
            return -1;
          if (a.last_name > b.last_name)
            return 1;
          return 0;
        },
        birsday(a, b) {
          let adate = new Date(a.birsday)
          let bdate = new Date(b.birsday)
          if (adate.getMonth() < bdate.getMonth()) {
            return -1;
          }
          if (adate.getDate() < bdate.getDate()) {
            return -1;
          }
          if (adate.getMonth() > bdate.getMonth()) {
            return 1;
          }
          if (adate.getDate() > bdate.getDate()) {
            return 1;
          }
          return 0;
        }
      }
      let listSort = (sortName = "first_name") => {
        let mapped = state.contacts;
        let today = new Date();
        let m = today.getMonth();
        let d = today.getDate();
        if (sortName == 'birsday') {
          mapped = state.contacts.filter((e) => {
            if (e.birsday.split("-")[1] > m) {
              if (e.birsday.split("-")[2] < d) {
                return 0
              }
              return 1
            } else {
              return 0
            }
          })
        }
        return mapped.sort(sortFunction[sortName]);
      }

      let array = listSort(state.sortMode);
      // разделение по буквам 

      let char = "";
      array.forEach((e) => {
        e.hr = false
        if (char != e.first_name[0]) {
          // e.hr = !state.filerName ? true : false;
          e.hr = true
          char = e.first_name[0];
        }
      })

      if (state.contactTags.indexOf(state.filterName) !== -1) {
        array = array.filter((e) => {
          return e.tags?(e.tags.indexOf(state.filterName)!==-1?true:false):false
        })
      }
      return array;

    },
    getSearch(state, getters) {
      return getters.getSortContacts.filter(function (el) {
        return (el.first_name + " " + el.last_name).toLowerCase().indexOf(state.search.toLowerCase()) !== -1
      })
    },
    getLength(state) {
      return state.contacts.length
    },

  },

  mutations: {
    setSearchString: (state, payload) => {
      state.search = payload
    },
    addNew: (state, contact) => {
      console.log(contact.id, state.contacts.length);
      contact.id = state.contacts.length + 1
      console.log(contact.id, state.contacts.length);
      state.contacts.push(contact)
      console.log(state);
    },
    edit: (state, contact) => {
      let selectContact = state.contacts.find(c => c.id === contact.id);
      Object.keys(contact).map((e) => { selectContact[e] = contact[e] })
    },
    save: (state) => {
      localStorage.contacts = JSON.stringify(state.contacts)
    },
    remove:(state,id) => {
      state.contacts.splice(state.contacts.findIndex(c => c.id === id),1)
    },
    load: (state) => {
      try {
        state.contacts = JSON.parse(localStorage.contacts)
      } catch (e) {
        console.log('Контакты ещё не сохранены на этом ПК');
      }
    },
    nextSort: (state) => {
      let m = ["first_name", "last_name", "birsday"]
      let i = m.indexOf(state.sortMode) + 1;
      i = i >= m.length ? 0 : i
      state.sortMode = m[i]
    },
    nextFilter: (state) => {
      let i = state.contactTags.indexOf(state.filterName) + 1;
      i = i > state.contactTags.length ? 0 : i
      state.filterName = state.contactTags[i] ? state.contactTags[i] : ""
    }

  },
  actions: {

  },
  modules: {}
});
