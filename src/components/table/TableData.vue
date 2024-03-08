<template>
    <td>{{tableDataValue}}</td>
</template>

<script>
export default {
    name: 'TableData',
    props: {
        tableDataValue: {
            type: String,
            required: true
        }
    },
    data: () => {
        return {
        }
    }
}

</script>