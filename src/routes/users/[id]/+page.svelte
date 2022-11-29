<script>
    import {goto} from "$app/navigation";
    import UserForm from '$lib/components/Userform.svelte'
    import Header from "$lib/components/Header.svelte";
    import {updateUser} from '$lib/services/clients';

    export let data
    let fetching = false;
    function onBackPressed() {
        goto('/users')
    }
    function getFullName(){
        let fullName = '';
        if (data?.user){
            const {name, firstName, lastName} = data.user;
            fullName = `${name ?? ''} ${firstName ?? ''} ${lastName ?? ''}`;
        }
        return fullName;
    }

    async function editUser({detail: {...user}}) {
        try {
            fetching = true;
            const request = await updateUser(user);
            onBackPressed();
            console.log(request);
        } catch (e) {
            console.error(e);
        } finally {
            fetching = false
        }
    }
</script>

<div class="module-wrapper">
    <Header on:backpressed={onBackPressed} title={data ? `Update ${getFullName()}` : ''}/>
    <UserForm values={data.user} on:submitform={editUser} fetching={fetching}/>
</div>

<style>
    .module-wrapper {
        padding: 15px 50px 50px 50px;
    }
</style>
