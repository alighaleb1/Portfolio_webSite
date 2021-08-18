import React from 'react'
import Skills from '../components/Skills'
import Title from '../components/Title'
import {InnerLayout, MainLayout} from '../styles/Layouts'
import ResumePage from '../components/ResumePage'
import styled from 'styled-components'

function Resume() {
    return (
        <MainLayout>
            <Skills />
            <ResumePage />
        </MainLayout>
    )
}

export default Resume
