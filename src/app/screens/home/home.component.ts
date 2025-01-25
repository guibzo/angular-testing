import { ContentContainerComponent } from '@/components/content-container/content-container.component'
import { HeaderComponent } from '@/components/header/header.component'
import { CalculatorService } from '@/services/calculator/service'
import { cn } from '@/utils/cn'
import { CommonModule, NgOptimizedImage } from '@angular/common'
import { Component, computed, inject, signal } from '@angular/core'
import { RouterLink } from '@angular/router'

@Component({
	selector: 'app-home',
	imports: [HeaderComponent, CommonModule, NgOptimizedImage, RouterLink, ContentContainerComponent],
	templateUrl: './home.component.html',
})
export class HomeComponent {
	firstName = signal('bozo')
	firstNameCapitalized = computed(() => this.firstName().toUpperCase())
	isOutlineVariant = signal(false)

	cn = cn
	title = 'angular'

	age = 50
	avatarURL = 'https://github.com/guibzo.png'

	headerCount = signal(0)

	items = [
		{ id: 1, name: 'one' },
		{ id: 2, name: 'two' },
		{ id: 3, name: 'three' },
	]

	private calculatorService = inject(CalculatorService)

	totalCost = this.calculatorService.sum(30, 55)

	handleChangeButtonVariant() {
		this.isOutlineVariant.set(!this.isOutlineVariant())
	}

	printEvent(event: number) {
		this.headerCount.set(event)
		console.log(`printEvent ${event}`)
	}

	sendForm(event: Event) {
		event.preventDefault()
		console.log(event)
	}
}
