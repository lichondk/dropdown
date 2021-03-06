import React, { Component } from 'react'
//Styled components and Icons
import Icon from 'framework/assets/Icon'
import { ICON_NOTIFICATIONS_NONE } from 'framework/assets/icons'
import { NotificationDiv, NotificationIcon, NotificationBadgeSpan } from '../styles/HeaderStyles'


class Notification extends Component {
	render() {
		return (
			<NotificationDiv>
				<NotificationIcon>
					<Icon icon={ICON_NOTIFICATIONS_NONE} size={35} active={true} />
					<NotificationBadgeSpan>42</NotificationBadgeSpan>
				</NotificationIcon>
			</NotificationDiv>
		)
	}
}

export default Notification