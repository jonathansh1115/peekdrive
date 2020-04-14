import PropTypes from 'prop-types'
import _ from 'lodash'
import faker from 'faker'
import React, { Component } from 'react'
import { Search, Grid, Header, Segment, Label } from 'semantic-ui-react'

const source = _.times(5, () => ({
    title: faker.company.companyName(),
    description: faker.company.catchPhrase(),
    image: faker.internet.avatar(),
    price: faker.finance.amount(0, 100, 2, '$'),
}))

const resultRenderer = ({ title }) => <Label content={title} />

resultRenderer.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
}

const initialState = { isLoading: false, results: [], value: '' }

export default class SearchExampleStandard extends Component {
    state = initialState

    handleResultSelect = (e, { result }) => this.setState({ value: result.title })

    handleSearchChange = (e, { value }) => {
        this.setState({ isLoading: true, value })

        setTimeout(() => {
            if (this.state.value.length < 1) return this.setState(initialState)

            const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
            const isMatch = (result) => re.test(result.title)

            this.setState({
                isLoading: false,
                results: _.filter(source, isMatch),
            })
        }, 300)
    }

    render() {
        const { isLoading, value, results } = this.state

        return (
        <Grid>
            <Grid.Column width={6}>
            <Search
                loading={isLoading}
                onResultSelect={this.handleResultSelect}
                onSearchChange={_.debounce(this.handleSearchChange, 500, {
                leading: true,
                })}
                results={results}
                value={value}
                resultRenderer={resultRenderer}
                {...this.props}
            />
            </Grid.Column>
        </Grid>
        )
    }
}