import React from 'react'
import { Container, LogoContainer, Menu, MenuItem, MenuItemLink, WrapperCont, } from '../styles/styledComponets'

const NavBar = () => {
  return (
    <Container>
      <WrapperCont>
        <LogoContainer>
          <img src='https://res.cloudinary.com/dke83t4p2/image/upload/v1652934630/Realmod/icons/Logo_wgsbg3.png' alt='LogoRealMod'/>
          <p>
            Realmod
          </p>
          <p>
            Real estate agency
          </p>
        </LogoContainer>

        <Menu>

          <MenuItem>
            <MenuItemLink>
              Home
            </MenuItemLink>
          </MenuItem>

          <MenuItem>
            <MenuItemLink>
              About
            </MenuItemLink>
          </MenuItem>

          <MenuItem>
            <MenuItemLink>
              Property
            </MenuItemLink>
          </MenuItem>

          <MenuItem>
            <MenuItemLink>
              pages
            </MenuItemLink>
          </MenuItem>

          <MenuItem>
            <MenuItemLink>
              Blog
            </MenuItemLink>
          </MenuItem>

          <MenuItem>
            <MenuItemLink>
              Contact
            </MenuItemLink>
          </MenuItem>

        </Menu>
      </WrapperCont>
    </Container>
  )
}

export default NavBar