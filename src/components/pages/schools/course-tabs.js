import React from "react";
import { Tabs, Tab, CollapsibleItem, Collapsible } from "react-materialize";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
export default function CourseTabs() {
  return (
    <div>
      <div
        className="section"
        style={{
          padding: `1rem`,
        }}
      >
        <Tabs className="tab-demo z-depth-1 tabs-fixed-width">
          <Tab
            active
            options={{
              duration: 300,
              onShow: null,
              responsiveThreshold: Infinity,
              swipeable: false,
            }}
            title="Who Should Enrol"
          >
            <div
              className="section"
              style={{
                padding: `2rem 1rem`,
                background: `white`,
              }}
            >
              <h4>Who Should Enrol?</h4>
              <p>
                The Accounting Principles Skill Set is suitable for individuals
                that may have completed older versions of the Certificate IV in
                Bookkeeping or the Certificate IV in Accounting qualifications
                (FNS10 Training Package or earlier) that wish to update their
                qualification for entry to the new FNS50217 Diploma of
                Accounting. The units of competency in this skill set also
                provide credit towards the FNS40217 Certificate IV in Accounting
                and Bookkeeping qualification. Completion of the Accounting
                Principles Skill Set is an entry requirement of the FNS50217
                Diploma of Accounting and is a partial entry requirement for
                FNS60217 Advanced Diploma of Accounting qualification.
              </p>
            </div>
          </Tab>
          <Tab
            options={{
              duration: 300,
              onShow: null,
              responsiveThreshold: Infinity,
              swipeable: false,
            }}
            title="Entry Requirements"
          >
            <div
              className="section"
              style={{
                padding: `2rem 1rem`,
                background: `white`,
              }}
            >
              <h4>Skill Set Entry Requirements</h4>
              <p>
                This is an open entry course with no pre-requisite
                qualifications. In order for participants to successfully
                complete this course, it is recommended they have an accounting
                or bookkeeping background, have completed previously an
                equivalent Certificate IV Accounting or Bookkeeping Course, have
                practical accounting or bookkeeping experience and have strong
                literacy and numeracy skills.
              </p>
            </div>
          </Tab>
          <Tab
            options={{
              duration: 300,
              onShow: null,
              responsiveThreshold: Infinity,
              swipeable: false,
            }}
            title="Assessment"
          >
            <div
              className="section"
              style={{
                padding: `2rem 1rem`,
                background: `white`,
              }}
            >
              <h4>Assessment</h4>
              <p>
                To complete your assessment and meet the requirements for
                performance evidence, you may be required to undertake a
                combination of tasks. These can include: <br /> <br />
                <p>Assessment may include:</p>
                <ul>
                  <li>- Short Answer Questions</li>
                  <li>- Long Answer Questions</li>
                  <li>- Multiple Choice Questions</li>
                  <li>- Case Study and Scenario's</li>
                  <li>- Projects</li>
                  <li>- Presentations</li>
                  <li>- Research Tasks</li>
                  <li>- Role Play</li>
                </ul>
              </p>
              <p>
                Examples of activities that can be allocated to students
                included in self-directed hours may be:
              </p>
              <p>
                <ul>
                  <li>- Set reading (textbook/workbook)
</li>
                  <li>- Instructed research
</li>
                  <li>- Self-directed research
</li>
                  <li>- Webinars</li>
                  <li>- Forums</li>
                </ul>
              </p>
            </div>
          </Tab>
          <Tab
            options={{
              duration: 300,
              onShow: null,
              responsiveThreshold: Infinity,
              swipeable: false,
            }}
            title="Skillset Outline"
          >
            <div
              className="section"
              style={{
                padding: `2rem 1rem`,
                background: `white`,
              }}
            >
              <h4>Course Duration</h4>
              <p>The total course duration is 6 months.</p>

              <div className="units">
              <h4>Skillset Outline (Units)</h4>
              <Collapsible accordion>
  <CollapsibleItem
    expanded={false}
    header="Core Units"
    icon={<ExpandMoreIcon />}
    node="div"
  >
   <ul>
       <li>- <strong> FNSACC311</strong> - Process financial transactions and extract interim reports</li>
       <li>- <strong> FNSACC312</strong> - Administer subsidiary accounts and ledgers</li>
       <li>- <strong> FNSACC408</strong> - Work effectively in the accounting and bookkeeping industry</li>
       <li>- <strong> FNSACC416</strong> - Set up and operate a computerised accounting system</li>
       <li>- <strong> FNSTPB401</strong> - Complete business activity and instalment activity statements</li>
       <li>- <strong> FNSTPB402</strong> - Establish and maintain payroll systems</li>
       <li>- <strong> BSBFIA401</strong> - Prepare financial reports</li>
   </ul>
  </CollapsibleItem>
  </Collapsible>
              </div>
            </div>
          </Tab>
         
        </Tabs>
      </div>
    </div>
  );
}
