<template>
    <tr>
        <TableData v-for="(column, index) in columns" :key="index" :tableDataValue="column" />
    </tr>
</template>

<script>
import TableData from './TableData.vue';

export default {
    name: 'TableRow',
    components: {
        TableData
    },
    props: {
        columns: {
            type: Array,
            required: true
        }
    },
    data: () => {
        return {
        }
    }
}
</script>