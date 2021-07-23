import React, {useState} from 'react'
import '../../build/global.scss'
import { Header } from '../components/header/Header'
import {JobAlerts} from "../components/JobAlerts";
import {JobGrouping} from "../components/home/JobGrouping";
import {SearchArea} from "../components/search/SearchArea";
import {RelatedContent} from "../components/RelatedContent";

// markup
const SearchPage = () => {

    const [open,setOpen] = useState(false)

    return (
        <div id={'page'} className={open ? 'mobile-open':''}>
            <Header
                open={open}
                setOpen={setOpen}
                page={'search'}
            />
            <SearchArea />
            <JobAlerts/>
            <div className="grey-bg">
                <JobGrouping />
            </div>
            <RelatedContent />
        </div>
    )
}

export default SearchPage
