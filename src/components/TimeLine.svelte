<script>
    export let lines;
</script>

<dl>
	{#each lines as { title, dates, resume, tags }}
    <dt>
        <span class="title">{title}</span>
        <br/>
        <span class="dates">{dates}</span>
    </dt>
    <dd>
        <span class="resume">{@html resume.replace(/\n/g, "<br />")}</span>
        {#if tags}
            <br />
            {#each tags as tag}
                <span class="tag">{tag}</span>
            {/each}
        {/if}
    </dd>
    {/each}
</dl>

<style>
dl {
    margin-right: 15px;
    margin-left: 15px;
    margin-top: 20px;
}

dd {
    margin-bottom: 15px;
    margin-left: 0px;
}

.title {
    font-weight: bold;
}
.dates {
    font-style: italic;
}

.tag{
    background-color:  #f6db5f;
    display: inline;
    padding: .2em .6em .3em;
    font-size: 75%;
    font-weight: 700;
    line-height: 1;
    color: gray;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    border-radius: .25em;
    margin-right: 3px;
}

</style>