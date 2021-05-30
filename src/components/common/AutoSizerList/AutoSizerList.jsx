import React from 'react'
import { AutoSizer, List } from 'react-virtualized'
import PropTypes from 'prop-types'

export const AutoSizerList = ({ rowHeight, rowRenderer, rowCount }) => (
  <AutoSizer>
    {({ width, height }) =>
      (
        <div>
        <List
            width={width}
            height={height}
            rowHeight={rowHeight}
            rowRenderer={rowRenderer}
            rowCount={rowCount}
        />
        </div>
      )}
  </AutoSizer>
)

AutoSizerList.propTypes = {
  rowHeight: PropTypes.number.isRequired,
  rowRenderer: PropTypes.func.isRequired,
  rowCount: PropTypes.number.isRequired
}
