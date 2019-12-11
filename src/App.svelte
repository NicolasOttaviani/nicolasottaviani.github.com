<script>
    import Layout from './components/Layout.svelte'
    import Grid from './components/Grid.svelte'
	import TimeLine from './components/TimeLine.svelte'
	
	export let name, title, resume, contact, skills, formation, xp;
</script>

<Layout>
    <div slot="overview">
        <h1>{name}</h1>
        <p class="job">{title}</p>
        <p class="heading">{@html resume.replace(/\n/g, "<br />")}</p>
    </div>
    <div slot="image">
        <img src="./nico.png" alt="nico" />
    </div>
    <div slot="main">
        <h2>Expériences Pro</h2>
        <TimeLine lines={xp.map(f => ({...f, title: f.title+' - '+f.company}))} />
    </div>
    <div slot="aside">
        <h2>Contact</h2>
        <Grid lines={[
           {i:'fas fa-phone-alt', _: contact.phone},
           {i:'fas fa-envelope', _: contact.email},
           {i:'fas fa-home', _: contact.address.replace(/\n/g, "<br />")},
           {i:'fab fa-linkedin-in', _: contact.linkedin},
           {i:'fab fa-github', _: contact.github},
        ]}/>
        <h2>Compétences</h2> 
        <Grid lines={[
           {i:'far fa-smile-wink', _: skills.soft},
           {i:'fas fa-drafting-compass', _: skills.hard}
        ]}/>
        <h2>Formations</h2>
        <TimeLine lines={formation.map(f => ({...f, resume: f.subtitle+'\n'+f.university}))} />
    </div>
</Layout>

<style>
h1, .job{
    text-align: center;
    margin: 0;
}
h1{
    font-size: 4ch;
}
.heading{
    text-align: justify;
    font-style: italic;
    padding: 30px;
}
</style>