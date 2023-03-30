import React from 'react'

const TabsContent = ({ id, value, content }) => {
  return (
    <TabPanel value={value} index={id}>
          {content}
    </TabPanel>
  )
}

export default TabsContent