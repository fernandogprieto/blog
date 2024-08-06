import { translate } from '@docusaurus/Translate'

import MyLayout from '@site/src/theme/MyLayout'

const TITLE = translate({
    id: 'theme.video.title',
    message: 'The video is coming at a fast pace', }
)

const DESCRIPTION = translate({
    id: 'theme.video.description',
    message: '', }
)

function ShowcaseHeader() {
    return (
    <section className="text-center">
        <h2>{TITLE}</h2>
        <p>{DESCRIPTION}</p>
        {/* <a
        className="button button--primary"
        href={GITHUB_URL}
        target="_blank"
        rel="noreferrer"
        >
        <Translate id="showcase.header.button"> Github </Translate>
      </a> */}
    </section>
    )
}

function Videos() {
    return (
    <MyLayout title={TITLE} description={DESCRIPTION} maxWidth={1280}>
        <main className="margin-vert--lg">
            <ShowcaseHeader />
            </main>
    </MyLayout>
    )
}

export default Videos