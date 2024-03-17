import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss']
})
export class OptionsComponent {
  items: any[] = [
    {
      icon: 'fa-solid fa-wand-magic-sparkles',
      tooltipOptions: { tooltipLabel: "gradient colors" },
      command: () => this.visibleModel1 = true
    },
    {
      icon: 'fa-solid fa-palette',
      tooltipOptions: { tooltipLabel: "solid colors" },
      command: () => this.visibleModel2 = true
    },
    {
      icon: 'fa-solid fa-rotate',
      tooltipOptions: { tooltipLabel: "random image" },
      command: () => this.changeImg()
    },
    {
      icon: 'fa-solid fa-bars-staggered',
      tooltipOptions: { tooltipLabel: "notes" },
      routerLink: ['/notes']
    },
    {
      icon: 'fa-solid fa-check',
      tooltipOptions: { tooltipLabel: "todos" },
      routerLink: ['/todos']
    },
    {
      icon: 'fa-regular fa-bookmark',
      tooltipOptions: { tooltipLabel: "bookmarks" },
      routerLink: ['/bookmarks']
    }
  ];

  gradientColors: string[] = [
    "background: linear-gradient(to left, #bbd2c5, #536976, #292e49)",
    "background: linear-gradient(to right, #ad5389, #3c1053)",
    "background: linear-gradient(125.83deg, #2980b9 0%, #2c3e50 99.09%)",
    "background: linear-gradient(90deg, #24c6dc 0.64%, #514a9d 99.36%)",
    "background: linear-gradient(to right, #0f0c29, #302b63, #24243e)",
    "background: radial-gradient(80% 80% at 101.61% 76.99%, rgb(45, 2, 100) 0%, rgb(3, 0, 35) 100%)",
    "background: linear-gradient(323.02deg, rgb(221, 113, 49) 18.65%, rgb(251, 212, 96) 82.73%)",
    "background: linear-gradient(127.39deg, rgb(133, 27, 106) 6.04%, rgb(200, 53, 83) 86.97%)",
    "background: linear-gradient(to left, #5a3f37, #2c7744)",
    "background: linear-gradient(130.39deg, rgb(254, 111, 76) 9.83%, rgb(197, 54, 70) 85.25%)",
  ]

  solidColors: string[] = [
    "background: #5b5c63;",
    "background: #151e9a;",
    "background: #265073;",
    "background: #9B4444;",
    "background: #0D9276;",
    "background: #5433b0;",
    "background: #747264;",
    "background: #0B60B0;",
    "background: #A367B1;",
  ]

  loader!: any
  imageSrc: any = ''
  imageColor: any = ''
  figure!: any
  img!: any
  color: string | undefined
  visibleModel1: boolean = false
  visibleModel2: boolean = false
  @ViewChild('mainBG') mainBG!: ElementRef

  ngOnInit(): void {
    this.loader = document.querySelector('.loaderLayer') as HTMLElement
    this.figure = document.querySelector('figure') as HTMLElement
    this.img = this.figure.firstChild as HTMLElement
    this.imageColor = localStorage.getItem('imageColor')
    this.imageSrc = localStorage.getItem('imageSrc')
    if (localStorage.getItem('imageSrc') == null && localStorage.getItem('imageColor') == null)
      this.imageColor = 'linear-gradient(to right, rgb(15, 12, 41), rgb(48, 43, 99), rgb(36, 36, 62))'
  }

  async changeImg(): Promise<void> {
    this.loader.classList.add('d-flex')
    const response = await fetch('https://source.unsplash.com/random/1920x1080')
    if (response.url === this.imageSrc) return this.changeImg()
    this.mainBG.nativeElement.style.background = ''
    this.imageSrc = response.url
    this.updateLocalStorage('imageSrc', this.imageSrc, 'imageColor')
    this.loader.classList.remove('d-flex')
  }

  changeColor(event: any) {
    this.img.removeAttribute('src');
    this.figure.style.background = event.target.style.background;
    this.updateLocalStorage('imageColor', event.target.style.background, 'imageSrc')
  }

  pickColor(event: any) {
    this.figure.style.background = event.value
    this.updateLocalStorage('imageColor', event.target.style.background, 'imageSrc')
  }

  updateLocalStorage(updateItem: string, value: string, removedItem: string) {
    localStorage.setItem(updateItem, value)
    localStorage.removeItem(removedItem)
  }
}
