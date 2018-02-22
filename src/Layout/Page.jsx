import React from 'react';
import { connect } from 'react-redux'

const Page = ({ title, children }) => (
  <div>
    <h1>{title}</h1>
    {children}
  </div>
)

export default connect(state => state)(Page);
