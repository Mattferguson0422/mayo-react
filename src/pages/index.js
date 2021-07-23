import React, {useState} from 'react'
import '../../build/global.scss'
import { Header } from '../components/header/Header'
import {JobCategoryStuff} from "../components/home/JobCategoryStuff";
import {HospitalNation} from "../components/home/HospitalNation";
import {JobAlerts} from "../components/JobAlerts";
import {Culture} from "../components/home/Culture";
import {GlobalLinks} from "../components/home/GlobalLinks";
import {JobGrouping} from "../components/home/JobGrouping";
import {EventLinks} from "../components/EventsLink";
import {Disclaimer, FooterSocial} from "../components/home/Disclaimer";
import {RelatedContent} from "../components/RelatedContent";

// markup
const IndexPage = () => {

    const [open,setOpen] = useState(false)

    return (
        <div id={'page'} className={open ? 'mobile-open':''}>
            <Header
                open={open}
                setOpen={setOpen}
                page={'home'}
            />
            <div className="intro">
                <section className="inner-max">
                    <h2>Imagine a job could change your life.</h2>
                    <p>Patients faced with life-changing illnesses find a path to healing at Mayo Clinic.  We humanize the practice of health care and inspire hope in the people who need it most—one patient at a time.  Our team-focused approach brings leading exptertise to each patient, with research and education that deliver innovation.  That's life changing.</p>
                </section>
            </div>
            <JobCategoryStuff />
            <HospitalNation />
            <Culture />
            <JobAlerts/>
            <GlobalLinks />
            <JobGrouping />
            <RelatedContent />
            <EventLinks />
            <Disclaimer />
            <FooterSocial />
        </div>
    )
}

export default IndexPage
