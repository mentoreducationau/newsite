import React from "react";

import Layout from "../../../../components/layout";
import Seo from "../../../../components/seo";
import Breadcrumb from '../../../../components/breadcrumb'
import CourseLinkCard from './course-link-card'

export default function FacultyCourseOverview() {
  return (
    <Layout>
      <Seo title="Faculty" />
      <div className="container">
          <Breadcrumb />
        <div className="section">
          <div className="section">
            <h1> Accounting and Book Keeping </h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro rerum quas dolorem iure doloribus accusantium enim, aliquam modi, earum animi soluta. Minima, at delectus? Nostrum inventore rem animi beatae distinctio!
            Consequuntur perspiciatis accusamus magnam, laboriosam, tenetur voluptates nisi a aut et atque magni deserunt eos sunt odit debitis exercitationem harum, consequatur suscipit optio? Blanditiis nobis repellendus inventore? Harum, illum deleniti.
            Autem debitis dignissimos accusamus iusto error ab, sapiente optio laudantium unde omnis doloribus sunt porro quibusdam doloremque repellendus eligendi quidem quod possimus nobis dicta. Sed praesentium expedita qui dolorem! Quas.</p>
          </div>

          <div className="section">
              <div className="row center-align">
                  <h3>Accounting & Bookkeeping Faculty Qualifications</h3>
                 <CourseLinkCard />
                 <CourseLinkCard />
                 <CourseLinkCard />
                 <CourseLinkCard />
              </div>
              
          </div>
        </div>
      </div>
      <div className="container">
        <div className="section">
          <div className="section">
              <div className="row center-align">
                  <h3>Accounting Skill Sets</h3>
                 <CourseLinkCard />
                 <CourseLinkCard />
                 <CourseLinkCard />
                 <CourseLinkCard />
                 <CourseLinkCard />
                 <CourseLinkCard />
                 <CourseLinkCard />
                 <CourseLinkCard />
              </div>
              
          </div>
        </div>
      </div>
    </Layout>
  );
}
