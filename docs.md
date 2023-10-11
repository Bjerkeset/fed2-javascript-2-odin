create trigger on_auth_user_created
after insert on auth.users for each row
execute procedure public.insert_profile_for_new_user ();

-- new.raw_user_meta_data->>'name', -- new.raw_user_meta_data->>'user_name', -- new.raw_user_meta_data->>'avatar_url'
