import React from 'react';
import {Card, CardTitle, CardText, CardActions, RaisedButton, Table, TableHeader, TableBody, TableRow, TableHeaderColumn, TableRowColumn} from 'material-ui'

export default class SpendPage extends React.Component {
  render() {
    return (
      <Card>
        <CardTitle title='spends'/>
        <CardText>
          <Table height='500px' fixedHeader={true} >
            <TableHeader>
              <TableRow>
                <TableHeaderColumn tooltip="date">date</TableHeaderColumn>
                <TableHeaderColumn tooltip="currency">currency</TableHeaderColumn>
                <TableHeaderColumn tooltip="Balance">Balance</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody showRowHover={true} stripedRows={true}>
              
            </TableBody>
          </Table>
        </CardText>
        <CardActions>
          <RaisedButton label='Add' primary={true} onTouchTap={()=> {}}/>
        </CardActions>
      </Card>
    )
  }
}