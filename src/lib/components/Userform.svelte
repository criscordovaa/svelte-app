<script>
    import { RefreshCw } from 'lucide-svelte';
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
    const genders = [
        {
            label: 'Male',
            value: 'M'
        },
        {
            label: 'Female',
            value: 'F'
        }
    ];
    const roles = [
        {
            label: 'Admin',
            value: 'rol1'
        },
        {
            label: 'Manager',
            value: 'rol2'
        },
    ];
    export let values;
    export let fetching;
    const user = {
        id: values?.id ?? '',
        name: values?.name ?? '',
        firstName: values?.firstName ?? '',
        lastName: values?.lastName ?? '',
        age: values?.age ?? '',
        email: values?.email ?? '',
        phone: values?.phone ?? '',
        gender: values?.gender ?? '',
        role: values?.role ?? ''
    };

    async function handleCreate(event) {
        event.preventDefault();
        dispatch('submitform', user);
    }
</script>

<form on:submit={handleCreate}>
    <div class="form-fields">
        <div class="form-control">
            <label>Name</label>
            <input bind:value={user.name} type="text" class="input" name="name" />
        </div>
        <div class="form-control">
            <label>First Name</label>
            <input bind:value={user.firstName} type="text" class="input" name="firstName" />
        </div>
        <div class="form-control">
            <label>Last Name</label>
            <input bind:value={user.lastName} type="text" class="input" name="lastName" />
        </div>
        <div class="form-control">
            <label>Age</label>
            <input bind:value={user.age} type="number" class="input" name="age" min="1" />
        </div>
        <div class="form-control">
            <label>Email</label>
            <input bind:value={user.email} type="text" class="input" name="email" />
        </div>
        <div class="form-control">
            <label>Phone</label>
            <input bind:value={user.phone} type="text" class="input" name="phone" />
        </div>
        <div class="form-control">
            <label>Gender</label>
            <select bind:value={user.gender} name="gender">
                {#each genders as gender}
                    <option value={gender.value}>{gender.label}</option>
                {/each}
            </select>
        </div>
        <div class="form-control">
            <label>Roles</label>
            <select bind:value={user.role} name="role">
                {#each roles as role}
                    <option value={role.value}>{role.label}</option>
                {/each}
            </select>
        </div>
    </div>
    <div class="actions">
        <button type="submit" class="btn">
				<span class:rotate={fetching}>
					{#if fetching}
						<RefreshCw size="14"/>
					{:else}
						Save
					{/if}
				</span>
        </button>
    </div>
</form>

<style>
    .form-fields {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 20px;
    }

    .form-control {
        display: flex;
        flex-direction: column;
        margin: 10px 0;
        flex: 1;
    }

    .form-control label {
        margin: 0 0 10px 10px;
        color: var(--title-color);
    }

    .form-control input,
    select {
        border-radius: 5px;
        padding: 10px;
        border-color: var(--secondary-color);
        border-style: solid;
        color: var(--title-color);
        background-color: #fff;
    }

    .form-control select {
        border-width: 2px;
    }

    .form-control input:focus,
    select:focus {
        outline: none !important;
        border-color: rgba(226, 201, 146, 0.6);
    }

    .actions {
        margin-top: 20px;
        display: flex;
        justify-content: flex-end;
    }

    .actions .btn {
        width: 150px;
        font-size: 15px;
    }
</style>
