import React, { Component } from 'react'
import { connect } from 'react-redux'
import { tabChange } from 'framework/store/modules/tabs'
import { getPlanetsAsync } from 'app/store/modules/cake'
import Starwars from 'app/components/Dashboard/Starwars/starwars'
import DropDown from 'app/components/Dashboard/dropdown'
import DropDownLink from 'app/components/Dashboard/dropdownLink'
import TabsContainer from 'framework/containers/Tabs/TabsContainer'
import { Center, NotifyButton, NotifyTheme } from 'app/styles/styledDropdown'
import * as colors from 'framework/assets/colors'

class StarwarsContainer extends Component {
	constructor(props) {
		super(props)
		this.state = {
			arr: [
				{ label: 'kasper', href: 'http://localhost:3000/dashboard/starwars/people/', icon: 'info', active: true, size: 18 },
				{ label: 'andrei', href: 'https://www.youtube.com/', icon: 'check', active: true, size: 18, center: Center.padding },
				{ label: 'frida', href: 'https://www.youtube.com/',  icon: 'apps', active: true, size: 18 },
				{ label: 'frida', href: 'https://www.youtube.com/',  icon: 'apps', active: true, size: 18 },
				{ label: 'frida', href: 'https://www.youtube.com/',  icon: 'apps', active: true, size: 18 },
				{ label: 'frida', href: 'https://www.youtube.com/',  icon: 'apps', active: true, size: 18 },
				{ label: 'frida', href: 'https://www.youtube.com/',  icon: 'apps', active: true, size: 18 },
				{ label: 'andersssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss', href: 'https://www.youtube.com/', icon: 'apps', active: true, size: 18 }
			],
			notifytext: { subLabel: 'Notifications', link: 'Settings', buttontext: 'Mark as read' }
		}
	
	}
	async componentWillMount() {
		await this.props.onMount()
	}


	render() {
		return (
			<div>
				<TabsContainer instanceID={'starwars'}/>
				{this.props.children}
				<DropDown icon={'info'} active={true} size={18} label={'kasper'}>
					{this.state.arr.map((data, index) => (
						<DropDownLink key={index} href={data.href} icon={data.icon} active={data.active} size={data.size} padding={data.center}> 
							<label>{data.label}</label>
						</DropDownLink>
					))} 
				</DropDown>
				<DropDown notify={NotifyTheme.notify} theme={NotifyButton.notify} bgColor={NotifyTheme.allContentBackgroundColor}
						  dropDowntheme={NotifyButton} width={'400px'} bordertheme={NotifyTheme.borderTheme} 
						  subLabel={'Notifikationer'} link={'Indstillinger'} buttontext={'Marker som læst'} seeAllNotifications={'Se alle'}
						  icon={'info'} active={false} size={18}>
					{this.state.arr.map((data, index) => (
						<DropDownLink key={index} href={data.href}
						 icon={data.icon} active={NotifyTheme.active} size={NotifyTheme.size} color={colors.TAB} 
						 hoverColor={NotifyTheme.hoverColor} borderColor={NotifyTheme.borderColor2} txtColor={NotifyTheme.txtColor} iconPadding={NotifyTheme.padding}>
							<p>{data.label}</p>
						</DropDownLink>
					))} 
				</DropDown>
				<Starwars/>
			</div>
		)
	}
}
const mapStateToProps = (state) => ({
})

function mapDispatchToProps(dispatch) {
	return {
		onMount: async () => {
			dispatch(tabChange('dashboard', 'Starwars'))
			dispatch(await getPlanetsAsync())
		}

	}
}

export default connect(mapStateToProps, mapDispatchToProps)(StarwarsContainer)