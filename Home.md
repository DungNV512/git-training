CODE & TEST LOCALLY
=========================

STEP 1. **Create branch**

        git checkout master 
        git pull upstream master
        git checkout -b TASK-ID

TASK-ID should be something meaningful, like "fee-template-module" or "bug-credit-not-populated-to-program-module"

STEP 2. **Commit**

        git commit -m 'TASK-ID Description of comments'

STEP 3. **Push code**

        git push origin TASK-ID

STEP 4. **Test localy**

       Test whole feature and function localy      

STEP 5. **Create PR**

        Create PR from origin/TASK-ID to upstream/master

Step 6. **Review code**

        If not ok -> plz fix something and come back STEP 2.

STEP 7. **Merge code**

        If everything (STEP 6) is ok, plz merge 

TEST SERVER : alpha and production
======================================

STEP 8. **Deploy & Test on server**

       After PR merge at STEP 7, deploy server alpha to test 
       After test feature yourself, ping tester to test this feature
       If there are anything problems, fix it and create new BUGFIX for this feature and comeback STEP 1

STEP 9. **Deploy & Test on production** (at branch `{projectName}_release`)

       After tested feature at STEP 8 and everything is ok, deploy server production to test 
       After test feature yourself plz ping tester to test this feature

STEP 10. **Close Task**

       After tester tested feature and everything is ok, tester will move task to done 


[HOTFIX - Workflow]
=========================

STEP 1. git checkout {projectName}_release something like champion_release
        
   ```Important: Only create branch HOTFIX from `{projectName}_release`, do not create branch HOTFIX from `{projectName}` branch```

STEP 2. git checkout -b HOTFIX_{ID-ticket}_Small_description

STEP 3. Git add file1, ....

STEP 4. Git commit -m `HOTFIX-{ID-ticket} Small description`

STEP 5. Git push origin `HOTFIX_{ID-ticket}_Small_description`

STEP 6. Create PR from `HOTFIX_{ID-ticket}_Small_description` to `champion_release` and merge this PR 

STEP 7. Pull code from champion_release to test on TEST server if ok please create PR from `{projectName}_release` to `{projectName}` branch

STEP 7. Merge this PR and retest on test server

