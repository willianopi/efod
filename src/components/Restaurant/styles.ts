import styled from 'styled-components'
import { cores } from '../../styles'
import { Link } from 'react-router-dom'

export const Card = styled.div`
  border: 1px solid ${cores.fontColor};
  max-width: 472px;
  width: 100%;
  font-size: 14px;
  overflow: hidden;
  background-color: ${cores.branco};
  position: relative;
`

export const CardImage = styled.div`
  width: 100%;
  height: 250px;
  overflow-y: hidden;

  img {
    width: 100%;
  }
`

export const CardHeader = styled.div`
  font-size: 18px;
  display: flex;
  justify-content: space-between;

  div {
    display: flex;

    h3 {
      margin-right: 8px;
    }
  }
`

export const CardInfos = styled.div`
  padding: 8px;

  p {
    margin: 16px 0;
  }
`

export const ButtonLink = styled(Link)`
  color: ${cores.branco};
  background-color: ${cores.fontColor};
  text-decoration: none;
  padding: 4px 6px;
  color: ${cores.bgFooter};
  font-weight: bold;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
