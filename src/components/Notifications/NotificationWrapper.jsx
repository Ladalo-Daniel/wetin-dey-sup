'use client' // because of the onclick tab events

import { Card, CardBody, Tab, Tabs } from "@nextui-org/react"
import NotificationList from "./NotificationList"


const ComingSoon = () => 
    <Card className="dark:bg-darkSlate">
        <CardBody>
            <h2 className="py-3 text-orange">Coming Soon!</h2>
            <p>Our developer team is working tirelessly to implement this feature. Stay tuned as it is coming soon.</p>
        </CardBody>
    </Card>

function NotificationWrapper() {
  return (
    <div className=" min-h-screen p-4  flex items-center w-[95%] sm:max-w-md mx-auto  flex-col gap-4">
      <Tabs variant={'underlined'} aria-label="Tabs variants" color="danger">
        <Tab key="all" title="All">       
            <div className=" w-full">
                <NotificationList />
            </div>
          </Tab>
          <Tab key="verified" title="Verified">
            <ComingSoon />
          </Tab>
          <Tab key="following" title="Following">
            <ComingSoon />
          </Tab>
      </Tabs>
    </div>
  )
}

export default NotificationWrapper
