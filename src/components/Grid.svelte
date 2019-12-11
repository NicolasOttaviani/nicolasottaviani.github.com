<script>
    export let lines;
</script>

<table>
	{#each lines as line}
        <tr>
            <th><i class={line.i}></i></th>
            <td>{@html line._}</td>
        </tr>
    {/each}
    <slot />
</table>
<style>
    table{
        table-layout: fixed;
        width: 100%;
    }
    i {
        color: #f6db5f;
    }
    tr {
        vertical-align: top;
    }
    th {
        width: 15%;
    }
    td {
        width: 85%;
        padding-bottom: 6px;
    }
</style>