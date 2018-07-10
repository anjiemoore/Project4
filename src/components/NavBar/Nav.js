import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'

class NavBar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu pointing secondary>
          <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
          <Menu.Item
            name='messages'
            active={activeItem === 'messages'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='surrender'
            active={activeItem === 'surrender'}
            onClick={this.handleItemClick}
          />
          <Menu.Menu position='right'>
            <Menu.Item
              name='login/logout'
              active={activeItem === 'login/logout'}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu>
      </div>
    )
  }
}

export default NavBar;